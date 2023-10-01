import { Stack } from '@mantine/core';
import React from 'react';

import { projects } from '@/data';

import { Experience, Introduction, ProjectSpoil, TechStack } from './parts';
export function HomeTemplate() {
  return (
    <Stack spacing={64}>
      <Introduction />
      <TechStack />
      <ProjectSpoil projects={projects.slice(0, 4)} />
      <Experience />
    </Stack>
  );
}
