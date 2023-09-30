import {
  ActionIcon,
  Burger,
  Flex,
  Group,
  Header as MantineHeader,
  MediaQuery,
  Paper,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSun } from '@tabler/icons-react';
import React from 'react';

import { ResponsiveWrapper } from '@/components/ui/wrapper/ResponsiveWrapper';

import { useShadowStyles } from '@/styles';

import { MenuDesktopView } from '..';

export function Header() {
  const [opened, action] = useDisclosure(false);
  const theme = useMantineTheme();

  const { toggleColorScheme, colorScheme } = useMantineColorScheme();

  const { classes: shadows } = useShadowStyles();

  return (
    <MantineHeader
      height={{ base: 60 }}
      pt="xs"
      unstyled
      pos="fixed"
      left={0}
      right={0}
      top={0}
    >
      <ResponsiveWrapper>
        <Paper
          radius="sm"
          px="md"
          py="sm"
          bg={
            colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.neutral[2]
          }
          className={shadows.defaultShadow}
        >
          <Flex justify="space-between" align="center">
            <Text>ZalCoder</Text>
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
              <MenuDesktopView />
            </MediaQuery>

            <Group>
              <ActionIcon onClick={() => toggleColorScheme()}>
                <IconSun />
              </ActionIcon>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => action.toggle()}
                  size="sm"
                  color={theme.colors.gray[6]}
                />
              </MediaQuery>
            </Group>
          </Flex>
        </Paper>
      </ResponsiveWrapper>
    </MantineHeader>
  );
}
