import { AppShell, Box, Button, useMantineTheme } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';

import { ResponsiveWrapper } from '@/components';

import { Footer, Header } from './parts';

type Props = {
  children: React.ReactNode;
  enableBack?: boolean;
};

const inter = Inter({ subsets: ['latin'] });

export function DefaultLayout(props: Props) {
  const theme = useMantineTheme();
  const router = useRouter();
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
              paddingBottom: 64,
              paddingTop: 90,
            },
          }}
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          footer={<Footer />}
          header={<Header />}
        >
          {props.enableBack && (
            <Button
              variant="subtle"
              color="gray"
              leftIcon={<IconArrowLeft size={14} />}
              size="xs"
              onClick={() => router.back()}
              mb={12}
            >
              Back
            </Button>
          )}
          {props.children}
        </AppShell>
      </ResponsiveWrapper>
    </Box>
  );
}
