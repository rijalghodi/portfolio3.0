import {
  Button,
  Group,
  Paper,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

import { useButtonStyles, useTypoStyles } from '@/styles';

import { Project } from '@/types';

export function ProjectCard(props: Project) {
  const { colorScheme } = useMantineColorScheme();
  const { classes: typo } = useTypoStyles();
  const { classes: buttons } = useButtonStyles();
  const theme = useMantineTheme();
  return (
    <Paper
      bg={
        colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.neutral[0]
      }
      p="md"
      shadow="sm"
    >
      {props.articleLink ? (
        <Link href={props.articleLink}>
          <Title
            order={2}
            className={typo.heading4}
            mb="sm"
            sx={{ '&:hover': { color: theme.colors.brand[7] } }}
          >
            {props.name}
          </Title>
        </Link>
      ) : (
        <Title order={2} className={typo.heading4} mb="sm">
          {props.name}
        </Title>
      )}
      <Text className={typo.bodyMd} mb="sm">
        {props.shortDesc}
      </Text>

      <Group spacing="xs">
        {props.githubLink && (
          <Button
            component="a"
            href={props.githubLink}
            className={buttons.secondaryButton}
            leftIcon={<IconBrandGithub size={16} />}
            title="Visit Source Code"
            styles={{
              leftIcon: { marginRight: 6 },
            }}
            radius="sm"
            size="xs"
            target="_blank"
          >
            Code
          </Button>
        )}
        {props.demoLink && (
          <Button
            component="a"
            href={props.demoLink}
            className={buttons.secondaryButton}
            leftIcon={<IconExternalLink size={16} />}
            styles={{
              leftIcon: { marginRight: 6 },
            }}
            title="Visit Demo Page"
            target="_blank"
            radius="sm"
            size="xs"
          >
            Demo
          </Button>
        )}
      </Group>
    </Paper>
  );
}
