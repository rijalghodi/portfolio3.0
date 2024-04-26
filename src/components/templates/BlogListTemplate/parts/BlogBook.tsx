import {
  Button,
  Flex,
  Grid,
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
      return readBlogs({ page_size: 12, start_cursor: startCursor });
    },
  });

  if (isLoading)
    return (
      <Grid gutter="xs" gutterMd="md">
        {[1, 2, 3, 4, 5].map((v) => (
          <Grid.Col key={v} span={12} sm={6}>
            <Paper
              key={v}
              h={120}
              w="100%"
              bg={
                colorScheme === 'dark'
                  ? theme.colors.dark[6]
                  : theme.colors.neutral[0]
              }
            />
          </Grid.Col>
        ))}
      </Grid>
    );

  // return 'Hello';
  return (
    <Stack>
      <Grid gutter="xs" gutterMd="md">
        {data?.results.map(({ properties }, i) => (
          <Grid.Col key={i} span={12} sm={6}>
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
          </Grid.Col>
        ))}
      </Grid>

      <Flex justify="space-between">
        <Button
          className={classes.tertiaryButton}
          onClick={() => setStartCursor(null)}
          leftIcon={<IconChevronLeft size={16} />}
        >
          Previous
        </Button>
        {data?.next_cursor && (
          <Button
            className={classes.tertiaryButton}
            variant="subtle"
            onClick={() => setStartCursor(data?.next_cursor)}
            rightIcon={<IconChevronRight size={16} />}
          >
            Next
          </Button>
        )}
      </Flex>
    </Stack>
  );
}
