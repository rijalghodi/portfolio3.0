import { Button, Group, Title, TitleOrder } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

import { useButtonStyles, useTypoStyles } from '@/styles';

import { PaperWrapper } from '../PaperWrapper';
type Props = {
  title: string;
  titleOrder?: TitleOrder;
  titleClassName?: string;
  description?: string;
  viewAllLink?: string;
  children: React.ReactNode;
};
export function SectionWrapper(props: Props) {
  const { classes: typo } = useTypoStyles();
  const { classes: buttons } = useButtonStyles();

  return (
    <PaperWrapper>
      <Group position="apart" mb="md">
        <Title
          className={props.titleClassName ?? typo.heading2}
          order={props.titleOrder ?? 1}
        >
          {props.title}
        </Title>
        {props.viewAllLink && (
          <Link href={props.viewAllLink}>
            <Button
              rightIcon={<IconArrowRight size={16} />}
              className={buttons.tertiaryButton}
              size="xs"
              component="div"
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
          </Link>
        )}
      </Group>
      {props.children}
    </PaperWrapper>
  );
}
