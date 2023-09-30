import { Button, Group, GroupProps } from '@mantine/core';
import { IconCopy, IconSquareRoundedPlus } from '@tabler/icons-react';
import React from 'react';
export function CallToActionButton(props: GroupProps) {
  return (
    <Group position="center" spacing="xs" {...props}>
      <Button leftIcon={<IconSquareRoundedPlus />}>Hire Me</Button>
      <Button leftIcon={<IconCopy />} variant="outline">
        Copy Email
      </Button>
    </Group>
  );
}
