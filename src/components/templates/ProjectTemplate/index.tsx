import { Box, Stack, Title } from '@mantine/core';
import React from 'react';

import { useTypoStyles } from '@/styles';

import { ProjectBook } from './parts';

export function ProjectTemplate() {
  const { classes: typo } = useTypoStyles();
  return (
    <Stack spacing={64}>
      <Box pt="sm">
        <Title order={1} className={typo.heading2} mb="md">
          My Projects
        </Title>
        <ProjectBook />
      </Box>
    </Stack>
  );
}
