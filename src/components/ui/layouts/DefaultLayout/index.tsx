import { AppShell, Box, useMantineTheme } from '@mantine/core';

import { Footer, Header } from './parts';

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
      <AppShell
        styles={{
          root: {
            borderRadius: theme.spacing.md,
            padding: '0px 24px 0px 24px',
            maxWidth: 848,
            margin: '0 auto',
          },
          main: {
            paddingBottom: 100,
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        footer={<Footer />}
        header={<Header />}
      >
        {props.children}
      </AppShell>
    </Box>
  );
}
