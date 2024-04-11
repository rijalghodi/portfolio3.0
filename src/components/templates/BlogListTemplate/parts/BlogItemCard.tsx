import {
  Paper,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import Link from 'next/link';
import React from 'react';

import { useTypoStyles } from '@/styles';

import { Blog } from '@/types';

export function BlogItemCard(props: Blog) {
  const { colorScheme } = useMantineColorScheme();
  const { classes: typo } = useTypoStyles();
  const theme = useMantineTheme();
  return (
    <Paper
      bg={
        colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.neutral[0]
      }
      p="md"
    >
      <Link href={`/blog/${props.slug}`}>
        <Title
          order={2}
          className={typo.heading4}
          mb="sm"
          sx={{ '&:hover': { color: theme.colors.brand[7] } }}
        >
          {props.title}
        </Title>
      </Link>

      <Text className={typo.bodySm} mb="sm">
        {props.excerpt}
      </Text>
    </Paper>
  );
}
