import {
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Skeleton,
  Stack,
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

type Blog = Omit<QueryDatabaseResponse, 'results'> & {
  results: Array<DatabaseObjectResponse>;
};
export default function BlogBook() {
  const { classes } = useButtonStyles();

  const [startCursor, setStartCursor] = useState<null | string | undefined>(
    null,
  );

  const { data, isLoading } = useQuery<Blog>({
    queryKey: ['read-blogs', startCursor],
    queryFn: () => {
      return readBlogs({ page_size: 12, start_cursor: startCursor });
    },
  });

  if (isLoading)
    return (
      <Stack spacing={48}>
        {[1, 2, 3, 4, 5, 6].map((v) => (
          <Group key={v} noWrap align="center">
            <Box w="100%">
              <Skeleton height={10} radius="xl" />
              <Skeleton height={10} mt={10} radius="xl" />
              <Skeleton height={10} mt={10} width="70%" radius="xl" />
            </Box>
            <Skeleton height={60} width={80} radius={8} />
          </Group>
        ))}
      </Stack>
    );

  return (
    <Stack>
      {data?.results.map(({ properties }, i) => (
        <>
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
            date={(properties.published_date as any).date.start}
            image={(properties.image as any).files[0]?.file.url}
          />
          <Divider />
        </>
      ))}

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
