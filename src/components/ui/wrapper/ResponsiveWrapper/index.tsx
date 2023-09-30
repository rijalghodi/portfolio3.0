import { Box, BoxProps, MantineSize } from '@mantine/core';
import React from 'react';

type Props = BoxProps & {
  maxWidth?: MantineSize;
};

export function ResponsiveWrapper({ maxWidth, ...props }: Props) {
  return (
    <Box
      sx={(theme) => ({
        margin: '0px auto',
        width: '100%',
        maxWidth: maxWidth ?? 900,
        paddingLeft: theme.spacing.sm,
        paddingRight: theme.spacing.sm,
        [theme.fn.largerThan('xs')]: {
          paddingLeft: theme.spacing.lg,
          paddingRight: theme.spacing.lg,
        },
        [theme.fn.largerThan('77.5em')]: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      })}
      {...props}
    >
      {props.children}
    </Box>
  );
}
