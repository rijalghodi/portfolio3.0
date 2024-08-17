import {
  Box,
  Divider,
  Flex,
  Paper,
  Stack,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';

import { CallToActionButton, SocialMenu, ZKeyLogo } from '@/components';

import { useShadowStyles, useTypoStyles } from '@/styles';

export function Footer() {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const { classes: shadows } = useShadowStyles();
  const { classes: typo } = useTypoStyles();
  const xSmallScreen = useMediaQuery('(max-width: 576px)');
  return (
    <footer>
      <Paper
        withBorder
        bg={
          colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.neutral[0]
        }
        className={shadows.upShadow}
        pt={64}
        px="sm"
        sx={{
          borderRadius: 0,
          borderTopLeftRadius: theme.radius.lg,
          borderTopRightRadius: theme.radius.lg,
        }}
      >
        <Stack spacing="lg" maw={400} mx="auto">
          <Stack spacing="md" align="center">
            <ZKeyLogo width={48} height={48} />
            <Text ta="center" className={typo.heading3}>
              Let's Work Together
            </Text>
            <CallToActionButton />
          </Stack>
          <Box py="sm" px="lg">
            <Flex
              justify={xSmallScreen ? 'flex-start' : 'space-between'}
              align="center"
              direction={xSmallScreen ? 'column' : 'row'}
              gap="xs"
            >
              <Text className={typo.heading4}>Follow My Journey</Text>
              <SocialMenu />
            </Flex>
          </Box>
        </Stack>
        <Divider mt="md" />
        <Text ta="center" py="xs" className={typo.bodySm}>
          Handcrafted by Rijal Ghodi 2023
        </Text>
      </Paper>
    </footer>
  );
}
