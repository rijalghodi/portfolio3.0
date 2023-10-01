import { Button, CopyButton, Group, GroupProps } from '@mantine/core';
import { IconCopy, IconSquareRoundedPlus } from '@tabler/icons-react';
import React from 'react';

import { companyEmail, companyMailToLink } from '@/data';

import { useButtonStyles } from '@/styles';
export function CallToActionButton(props: GroupProps) {
  const { classes: buttons } = useButtonStyles();
  return (
    <Group position="center" spacing="xs" {...props}>
      <Button
        leftIcon={<IconSquareRoundedPlus size={16} />}
        component="a"
        href={companyMailToLink}
      >
        Hire Me
      </Button>

      <CopyButton value={companyEmail}>
        {({ copied, copy }) => (
          <Button
            leftIcon={<IconCopy size={16} />}
            className={buttons.secondaryButton}
            onClick={copy}
          >
            {copied ? 'Copied!' : 'Copy Email'}
          </Button>
        )}
      </CopyButton>
    </Group>
  );
}
