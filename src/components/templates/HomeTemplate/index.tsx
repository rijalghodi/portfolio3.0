import { Stack } from '@mantine/core';
import React from 'react';

import { Introduction, TechStack } from './parts';
export function HomeTemplate() {
  return (
    <Stack spacing={64}>
      <Introduction />
      <TechStack />
    </Stack>
  );
}
