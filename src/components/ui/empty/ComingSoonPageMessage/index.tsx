import { Box, Stack, Text, Title } from '@mantine/core';
import React from 'react';

import { useTypoStyles } from '@/styles';

export function ComingSoonPageMessage() {
  const { classes: typo } = useTypoStyles();
  return (
    <Stack my="xl" align="flex-start">
      <Box>
        <Title className={typo.heading1} mb="md">
          Coming Soon...
        </Title>
        <Text className={typo.bodyLg}>
          Thank you for your visit. This page will be published shortly. Stay
          tuned!
        </Text>
      </Box>
    </Stack>
  );
}
