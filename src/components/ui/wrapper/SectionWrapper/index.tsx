import {
  Button,
  Group,
  Paper,
  Title,
  TitleOrder,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconArrowRight } from '@tabler/icons-react';
import React from 'react';

import { useButtonStyles, useShadowStyles, useTypoStyles } from '@/styles';
type Props = {
  title: string;
  titleOrder?: TitleOrder;
  titleClassName?: string;
  description?: string;
  viewAllLink?: string;
  children: React.ReactNode;
};
export function SectionWrapper(props: Props) {
  const xSmallScreen = useMediaQuery('(max-width: 576px)');
  const { classes: typo } = useTypoStyles();
  const { classes: shadows } = useShadowStyles();
  const { classes: buttons } = useButtonStyles();
  const { colorScheme } = useMantineColorScheme();

  const theme = useMantineTheme();
  return (
    <Paper
      radius="md"
      py="xl"
      px={xSmallScreen ? 'xs' : 'xl'}
      className={shadows.defaultShadow}
      bg={
        colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.neutral[2]
      }
    >
      <Group position="apart" mb="md">
        <Title
          className={props.titleClassName ?? typo.heading2}
          order={props.titleOrder ?? 1}
        >
          {props.title}
        </Title>
        {props.viewAllLink && (
          <Button
            rightIcon={<IconArrowRight size={16} />}
            className={buttons.secondaryButton}
            size="xs"
            component="a"
            href={props.viewAllLink}
            styles={{
              rightIcon: {
                transition: 'transform 0.3s ease',
                marginLeft: 4,
                marginRight: 4,
              },
              root: {
                '&:hover .mantine-Button-rightIcon': {
                  transform: 'translateX(4px)',
                },
              },
            }}
          >
            View All
          </Button>
        )}
      </Group>
      {props.children}
    </Paper>
  );
}
