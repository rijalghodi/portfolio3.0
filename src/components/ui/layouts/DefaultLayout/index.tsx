import { AppShell, Box, useMantineTheme } from '@mantine/core';

import { Footer, Header } from './parts';

type Props = {
  children: React.ReactNode;
};

export function DefaultLayout(props: Props) {
  const theme = useMantineTheme();

  return (
    <Box
      bg={theme.colorScheme === 'dark' ? theme.colors.dark[7] : undefined}
      w="100%"
    >
      <AppShell
        styles={{
          root: {
            borderRadius: theme.spacing.md,
            maxWidth: 800,
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
