import {
  Badge,
  Grid,
  Group,
  Paper,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import React from 'react';

import { techStacks } from '@/data';

import { SectionWrapper } from '@/components';

import { useTypoStyles } from '@/styles';
export function TechStack() {
  const { classes: typo } = useTypoStyles();
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  return (
    <SectionWrapper title="Tech Stack">
      <ul>
        <Grid gutter="xs" gutterMd="md">
          {techStacks.map((v) => (
            <Grid.Col key={v.category} span={12} sm={6}>
              <li>
                <Paper
                  bg={
                    colorScheme === 'dark'
                      ? theme.colors.dark[6]
                      : theme.colors.neutral[0]
                  }
                  p="md"
                  shadow="sm"
                >
                  <Title order={2} className={typo.heading4} mb="sm">
                    {v.category}
                  </Title>
                  <ul>
                    <Group spacing="xs">
                      {v.techs.map((tech, i) => (
                        <Badge
                          key={i}
                          component="li"
                          py={12}
                          px={12}
                          variant="dot"
                          color={tech.color}
                          size="md"
                          radius="xl"
                        >
                          {tech.name}
                        </Badge>
                      ))}
                    </Group>
                  </ul>
                </Paper>
              </li>
            </Grid.Col>
          ))}
        </Grid>
      </ul>
    </SectionWrapper>
  );
}
