import {
  Button,
  Group,
  Paper,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { IconBrandGithub, IconEye } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

import {
  useButtonStyles,
  useShadowStyles,
  useTransformationnStyles,
  useTypoStyles,
} from '@/styles';

import { Project } from '@/types';

export function ProjectCard(props: Project) {
  const { classes: shadows } = useShadowStyles();
  const { colorScheme } = useMantineColorScheme();
  const { cx, classes: typo } = useTypoStyles();
  const { classes: buttons } = useButtonStyles();
  const { classes: transformation } = useTransformationnStyles();
  const theme = useMantineTheme();
  return (
    <Paper
      className={cx(
        transformation.hoverUpTransformation,
        shadows.hoveredDefaultShadow,
      )}
      bg={
        colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.neutral[1]
      }
      p="sm"
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
      <Text className={typo.bodySm} mb="sm">
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
          >
            Code
          </Button>
        )}
        {props.demoLink && (
          <Button
            component="a"
            href={props.demoLink}
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
        )}
      </Group>
    </Paper>
  );
}
