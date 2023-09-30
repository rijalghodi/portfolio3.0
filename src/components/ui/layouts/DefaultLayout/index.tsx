import { AppShell, Box, useMantineTheme } from '@mantine/core';
import { Inter } from 'next/font/google';

import { ResponsiveWrapper } from '@/components';

import { Footer, Header } from './parts';

type Props = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ['latin'] });

export function DefaultLayout(props: Props) {
  const theme = useMantineTheme();
  return (
    <Box
      bg={
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.neutral[3]
      }
    >
      <ResponsiveWrapper>
        <AppShell
          className={inter.className}
          styles={{
            main: {
              borderRadius: theme.spacing.md,
              margin: 0,
              paddingLeft: '0px !important',
              paddingRight: '0px !important',
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
