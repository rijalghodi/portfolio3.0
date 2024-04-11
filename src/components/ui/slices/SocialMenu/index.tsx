import { Icon } from '@iconify/react';
import {
  ActionIcon,
  Group,
  GroupProps,
  MantineColor,
  MantineSize,
} from '@mantine/core';
import React from 'react';

import { comapnyLinkedIn, companyGithubLink, companyIgLink } from '@/data';

type Props = GroupProps & {
  size?: MantineSize;
  hoverBgColor?: MantineColor;
  hoverColor?: MantineColor;
};

export function SocialMenu(props: Props) {
  const { color, hoverBgColor, hoverColor, size, ...groupProps } = props;
  return (
    <Group
      {...groupProps}
      spacing={groupProps.spacing ?? 'xs'}
      noWrap={groupProps.noWrap ?? false}
    >
      <ActionIcon
        color={color}
        radius="xl"
        variant="subtle"
        component="a"
        target="_blank"
        href={companyGithubLink}
        size={size}
        sx={() => ({
          color: color,
          '&:hover': {
            backgroundColor: hoverBgColor,
            color: hoverColor,
          },
        })}
      >
        <Icon icon="mdi:github" color={color} width="75%" />
      </ActionIcon>
      <ActionIcon
        color={color}
        radius="xl"
        variant="subtle"
        component="a"
        target="_blank"
        href={comapnyLinkedIn}
        size={size}
        sx={() => ({
          '&:hover': {
            backgroundColor: hoverBgColor,
            color: hoverColor,
          },
        })}
      >
        <Icon icon="mdi:linkedin" width="75%" color={color} />
      </ActionIcon>
      <ActionIcon
        color={color}
        radius="xl"
        variant="subtle"
        component="a"
        target="_blank"
        href={companyIgLink}
        size={size}
        sx={() => ({
          '&:hover': {
            backgroundColor: hoverBgColor,
            color: hoverColor,
          },
        })}
      >
        <Icon icon="mdi:instagram" width="75%" color={color} />
      </ActionIcon>
    </Group>
  );
}
