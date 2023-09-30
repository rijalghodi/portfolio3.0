import {
  Button,
  Grid,
  Group,
  Paper,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { IconBrandGithub, IconEye } from '@tabler/icons-react';
import React from 'react';

import { projects } from '@/data';

import { SectionWrapper } from '@/components';

import {
  useButtonStyles,
  useShadowStyles,
  useTransformationnStyles,
  useTypoStyles,
} from '@/styles';

export function ProjectSpoil() {
  const { classes: shadows } = useShadowStyles();
  const { colorScheme } = useMantineColorScheme();
  const { cx, classes: typo } = useTypoStyles();
  const { classes: buttons } = useButtonStyles();
  const { classes: transformation } = useTransformationnStyles();
  const theme = useMantineTheme();

  return (
    <SectionWrapper title="My Projects" viewAllLink="/project">
      <ul>
        <Grid gutter="xs" gutterMd="md">
          {projects.slice(0, 4).map((v) => (
            <Grid.Col key={v.name} span={12} sm={6}>
              <li>
                <Paper
                  className={cx(
                    transformation.hoverUpTransformation,
                    shadows.hoveredDefaultShadow,
                  )}
                  bg={
                    colorScheme === 'dark'
                      ? theme.colors.dark[5]
                      : theme.colors.neutral[1]
                  }
                  p="sm"
                >
                  <Title order={2} className={typo.heading4} mb="sm">
                    {v.name}
                  </Title>
                  <Text className={typo.bodySm} mb="sm">
                    {v.shortDesc}
                  </Text>

                  <Group spacing="xs">
                    <Button
                      component="a"
                      className={buttons.secondaryButton}
                      leftIcon={<IconBrandGithub size={16} />}
                      title="Visit Source Code"
                      styles={{
                        leftIcon: { marginRight: 6 },
                      }}
                      radius="sm"
                      size="xs"
                    >
                      Code
                    </Button>
                    <Button
                      component="a"
                      className={buttons.secondaryButton}
                      leftIcon={<IconEye size={16} />}
                      styles={{
                        leftIcon: { marginRight: 6 },
                      }}
                      title="Visit Demo Page"
                      radius="sm"
                      size="xs"
                    >
                      Demo
                    </Button>
                  </Group>
                </Paper>
              </li>
            </Grid.Col>
          ))}
        </Grid>
      </ul>
    </SectionWrapper>
  );
}
