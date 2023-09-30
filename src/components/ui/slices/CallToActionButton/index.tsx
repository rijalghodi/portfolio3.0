import { Button, Group, GroupProps } from '@mantine/core';
import { IconCopy, IconSquareRoundedPlus } from '@tabler/icons-react';
import React from 'react';

import { useButtonStyles } from '@/styles';
export function CallToActionButton(props: GroupProps) {
  const { classes: buttons } = useButtonStyles();
  return (
    <Group position="center" spacing="xs" {...props}>
      <Button leftIcon={<IconSquareRoundedPlus />}>Hire Me</Button>
      <Button leftIcon={<IconCopy />} className={buttons.secondaryButton}>
        Copy Email
      </Button>
    </Group>
  );
}
