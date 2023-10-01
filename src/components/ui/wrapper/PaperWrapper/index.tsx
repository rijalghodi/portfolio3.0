import {
  Paper,
  PaperProps,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';

import { useShadowStyles } from '@/styles';
export function PaperWrapper(props: PaperProps) {
  const xSmallScreen = useMediaQuery('(max-width: 576px)');
  const { classes: shadows } = useShadowStyles();
  const { colorScheme } = useMantineColorScheme();

  const theme = useMantineTheme();

  return (
    <Paper
      radius="md"
      py="xl"
      px={xSmallScreen ? 'xs' : 'xl'}
      className={shadows.defaultShadow}
      bg={
        colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.neutral[2]
      }
      {...props}
    ></Paper>
  );
}
