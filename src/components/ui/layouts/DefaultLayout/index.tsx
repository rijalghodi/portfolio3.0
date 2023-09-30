import { AppShell, Box, Text, useMantineTheme } from '@mantine/core';
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
          : theme.colors.neutral[4]
      }
      styles={
        {
          // color: `${
          //   theme.colorScheme === 'dark' ? theme.colors.neutral[3] : 'red'
          // } !important`,
        }
      }
    >
      <ResponsiveWrapper>
        <AppShell
          className={inter.className}
          styles={{
            main: {
              borderRadius: theme.spacing.md,
              marginTop: 90,
              // background:
              //   theme.colorScheme === 'dark'
              //     ? theme.colors.dark[6]
              //     : theme.colors.neutral[2],
            },
            body: {
              color: 'red !important',
            },
          }}
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          footer={<Footer />}
          header={<Header />}
        >
          <Text>Resize app to see responsive navbar in action</Text>
          {props.children}
        </AppShell>
      </ResponsiveWrapper>
    </Box>
  );
}
