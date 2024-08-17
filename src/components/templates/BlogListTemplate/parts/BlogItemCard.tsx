import { Box, Group, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { IconCalendar } from '@tabler/icons-react';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { useTypoStyles } from '@/styles';

import { Blog } from '@/types';

export function BlogItemCard(props: Blog) {
  const { classes: typo } = useTypoStyles();
  const theme = useMantineTheme();
  const colorScheme = useColorScheme();

  return (
    <Link href={`/blog/${props.slug}`}>
      <Group
        position="apart"
        align="flex-start"
        noWrap
        sx={{
          '&:hover': {
            h2: {
              color: theme.colors.brand[7],
            },
          },
        }}
      >
        <Stack
          spacing="xs"
          miw={200}
          style={{ flexGrow: 1, flexShrink: 1, flexBasis: 600 }}
        >
          <Title order={2} className={typo.heading3} fw={700}>
            {props.title}
          </Title>
          {props.excerpt && (
            <Text className={typo.bodyMd}>{props.excerpt}</Text>
          )}
          <Group spacing="xs">
            <IconCalendar size={16} />
            <Text className={typo.bodySm}>
              {dayjs(props.date).format('MMM DD, YYYY')}
            </Text>
          </Group>
        </Stack>
        {props.image && (
          <Box
            style={{
              flexBasis: 200,
              maxWidth: 200,
              flexShrink: 1,
              flexGrow: 0,
              overflow: 'clip',
            }}
            sx={(theme) => ({
              backgroundColor:
                colorScheme === 'dark' ? theme.colors.dark[4] : '#ffffff',
              aspectRatio: '16 / 9',
              '@media (max-width: 500px)': {
                aspectRatio: '1 / 1',
                maxHeight: 80,
                overflow: 'clip',
              },
            })}
            pos="relative"
          >
            <Image
              src={props.image}
              alt="image"
              objectFit="cover"
              fill
              placeholder="empty"
            />
          </Box>
        )}
      </Group>
    </Link>
  );
}
