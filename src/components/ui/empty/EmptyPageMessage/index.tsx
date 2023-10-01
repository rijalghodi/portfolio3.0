import { Box, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

import { useTypoStyles } from '@/styles';

export function EmptyPageMessage() {
  const { classes: typo } = useTypoStyles();
  return (
    <Stack my="xl" align="flex-start">
      <Box>
        <Title className={typo.heading1} mb="md">
          Page Not Found
        </Title>
        <Text className={typo.bodyLg}>
          Please check your URL again or return to the{' '}
          <Link href="/" className={typo.anchorStyle}>
            homepage
          </Link>
        </Text>
      </Box>
    </Stack>
  );
}
