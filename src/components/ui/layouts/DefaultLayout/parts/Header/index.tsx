import {
  ActionIcon,
  Box,
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
import { IconMoon, IconSun } from '@tabler/icons-react';
import React from 'react';

import { ResponsiveWrapper, ZKeyLogo } from '@/components';

import { useTypoStyles } from '@/styles';

import { MenuDesktopView, MenuMobileView } from '..';

export function Header() {
  const [opened, action] = useDisclosure(false);
  const theme = useMantineTheme();

  const { toggleColorScheme, colorScheme } = useMantineColorScheme();

  const { classes: typo } = useTypoStyles();

  return (
    <MantineHeader
      height={{ base: 50 }}
      pt="xs"
      unstyled
      pos="fixed"
      left={0}
      right={0}
      top={0}
      sx={{
        zIndex: 100,
      }}
    >
      <ResponsiveWrapper>
        <Paper
          radius="sm"
          px="md"
          py="xs"
          bg={
            colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.neutral[0]
          }
          shadow="md"
        >
          <Flex justify="space-between" align="center">
            <Group spacing={12}>
              <ZKeyLogo width={32} height={32} />
              <Text className={typo.heading5}>Zal Code</Text>
            </Group>
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
              <MenuDesktopView />
            </MediaQuery>

            <Group spacing="sm">
              <ActionIcon onClick={() => toggleColorScheme()}>
                {colorScheme === 'dark' ? (
                  <IconSun size={20} />
                ) : (
                  <IconMoon size={18} />
                )}
              </ActionIcon>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Box>
                  <Burger
                    opened={opened}
                    onClick={action.toggle}
                    size="sm"
                    color={theme.colors.gray[6]}
                  />
                  <MenuMobileView opened={opened} onClose={action.toggle} />
                </Box>
              </MediaQuery>
            </Group>
          </Flex>
        </Paper>
      </ResponsiveWrapper>
    </MantineHeader>
  );
}
