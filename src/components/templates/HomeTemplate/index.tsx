import { Stack } from '@mantine/core';
import React from 'react';

import { Experience, Introduction, ProjectSpoil, TechStack } from './parts';
export function HomeTemplate() {
  return (
    <Stack spacing={64}>
      <Introduction />
      <TechStack />
      <ProjectSpoil />
      <Experience />
    </Stack>
  );
}
