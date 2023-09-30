import { Box, Flex, Text, Title } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

import { useTypoStyles } from '@/styles';

export function Introduction() {
  const { classes: typo } = useTypoStyles();
  return (
    <Flex>
      <Box>
        <Title order={1} className={typo.heading1} mb="md">
          Hey, I'm Zal
        </Title>
        <Text className={typo.bodyXl} mb="sm">
          Welcome to my digital garden 🌴
        </Text>
        <Text className={typo.bodyLg}>
          I am a full-stack developer living in Jakarta. Here is my story of
          pursuing my dream to become a tech expert. I love developing{' '}
          <Link href="/project" className={typo.anchorStyle}>
            products
          </Link>{' '}
          and{' '}
          <Link href="/blog" className={typo.anchorStyle}>
            writing
          </Link>{' '}
          about code, self-improvement, and life.
        </Text>
      </Box>
      <Box></Box>
    </Flex>
  );
}
