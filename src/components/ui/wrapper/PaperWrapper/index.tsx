import { Paper, PaperProps } from '@mantine/core';
import React from 'react';

import { useShadowStyles } from '@/styles';
export function PaperWrapper(props: PaperProps) {
  const { classes: shadows } = useShadowStyles();

  return (
    <Paper
      radius="md"
      className={shadows.defaultShadow}
      bg="inherit"
      {...props}
    ></Paper>
  );
}
