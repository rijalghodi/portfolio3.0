import {
  Button,
  Flex,
  Paper,
  Stack,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import {
  DatabaseObjectResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { useButtonStyles } from '@/styles';
import { readBlogs } from '@/utils/client/read-blogs';

import { BlogItemCard } from './BlogItemCard';

type Foo = Omit<QueryDatabaseResponse, 'results'> & {
  results: Array<DatabaseObjectResponse>;
};
export default function BlogBook() {
  const { classes } = useButtonStyles();
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const [startCursor, setStartCursor] = useState<null | string | undefined>(
    null,
  );

  const { data, isLoading } = useQuery<Foo>({
    queryKey: ['read-blogs', startCursor],
    queryFn: () => {
      return readBlogs({ page_size: 6, start_cursor: startCursor });
    },
  });

  if (isLoading)
    return (
      <Stack>
        {[1, 2, 3, 4, 5].map((v) => (
          <Paper
            key={v}
            h={100}
            w="100%"
            bg={
              colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.neutral[0]
            }
          />
        ))}
      </Stack>
    );

  // return 'Hello';
  return (
    <Stack>
      {data?.results.map(({ properties }, i) => (
        <BlogItemCard
          key={i}
          id={(properties.id as any).unique_id.number}
          title={(properties.title as any).title
            ?.map((v: any) => v.plain_text)
            .join(' ')}
          excerpt={(properties.excerpt as any).rich_text
            ?.map((v: any) => v.plain_text)
            .join('')}
          slug={(properties.slug as any).rich_text[0].plain_text}
        />
      ))}
      <Flex justify="space-between">
        <Button
          className={classes.tertiaryButton}
          onClick={() => setStartCursor(null)}
          leftIcon={<IconChevronLeft size={16} />}
        >
          Back to Start
        </Button>
        {data?.next_cursor && (
          <Button
            className={classes.tertiaryButton}
            variant="subtle"
            onClick={() => setStartCursor(data?.next_cursor)}
            rightIcon={<IconChevronRight size={16} />}
          >
            Next Page
          </Button>
        )}
      </Flex>
    </Stack>
  );
}
