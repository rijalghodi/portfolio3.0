import {
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import React from 'react';

import { CallToActionButton, SocialMenu } from '@/components';

import { useShadowStyles, useTypoStyles } from '@/styles';

export function Footer() {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const { classes: shadows } = useShadowStyles();
  const { classes: typo } = useTypoStyles();
  return (
    <footer>
      <Paper
        bg={
          colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.neutral[2]
        }
        className={shadows.upShadow}
        pt="xl"
        px="sm"
        sx={{
          borderRadius: 0,
          borderTopLeftRadius: theme.radius.lg,
          borderTopRightRadius: theme.radius.lg,
        }}
      >
        <Stack spacing="md" maw={400} mx="auto">
          <Stack spacing="sm">
            <Text ta="center" className={typo.heading3}>
              Let's Work Together
            </Text>
            <CallToActionButton />
          </Stack>
          <Paper
            radius="xl"
            bg={
              colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.neutral[1]
            }
            className={shadows.defaultShadow}
            py="sm"
            px="lg"
          >
            <Group position="apart">
              <Text className={typo.heading4}>Follow My Journey</Text>
              <SocialMenu />
            </Group>
          </Paper>
        </Stack>
        <Divider mt="md" />
        <Text ta="center" py="xs" className={typo.bodySm}>
          Handcrafted by Rijal Ghodi 2023
        </Text>
      </Paper>
    </footer>
  );
}
