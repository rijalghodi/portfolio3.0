import {
  Grid,
  Group,
  Paper,
  Title,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
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
      <Grid gutter="xs" gutterMd="md">
        {techStacks.map((v) => (
          <Grid.Col key={v.category} span={12} sm={6}>
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

              <Group spacing="lg">
                {v.techs.map((tech, i) => (
                  <Tooltip label={tech.name} key={i}>
                    <Link href={tech.link ?? '#'}>
                      <Image
                        src={tech.image}
                        alt={tech.name}
                        height={40}
                        width={40}
                      />
                    </Link>
                  </Tooltip>
                ))}
              </Group>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
