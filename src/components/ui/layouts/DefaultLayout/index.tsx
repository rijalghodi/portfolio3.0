import { AppShell, Box, useMantineTheme } from '@mantine/core';

import { Footer, Header } from './parts';
import { ResponsiveWrapper } from '../../wrapper';

type Props = {
  children: React.ReactNode;
};

export function DefaultLayout(props: Props) {
  const theme = useMantineTheme();

  return (
    <Box
      bg={
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.neutral[1]
      }
      w="100%"
    >
      <ResponsiveWrapper>
        <AppShell
          styles={{
            main: {
              borderRadius: theme.spacing.md,
              margin: 0,
              paddingLeft: '0px !important',
              paddingRight: '0px !important',
              paddingBottom: 64,
              paddingTop: 90,
              width: '100%',
            },
          }}
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          footer={<Footer />}
          header={<Header />}
        >
          {props.children}
        </AppShell>
      </ResponsiveWrapper>
    </Box>
  );
}
