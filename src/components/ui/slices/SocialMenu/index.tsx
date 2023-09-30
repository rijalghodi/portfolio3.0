import { Icon } from '@iconify/react';
import {
  ActionIcon,
  Group,
  GroupProps,
  MantineColor,
  MantineSize,
} from '@mantine/core';
import React from 'react';

import { companyFbLink, companyIgLink, companyTiktokLink } from '@/data';

import { useTransformationnStyles } from '@/styles';

type Props = GroupProps & {
  size?: MantineSize;
  hoverBgColor?: MantineColor;
  hoverColor?: MantineColor;
};

export function SocialMenu(props: Props) {
  const { color, hoverBgColor, hoverColor, size, ...groupProps } = props;
  const { classes: transforms } = useTransformationnStyles();
  return (
    <Group
      {...groupProps}
      spacing={groupProps.spacing ?? 'xs'}
      noWrap={groupProps.noWrap ?? false}
    >
      <ActionIcon
        color={color ?? 'brand'}
        radius="xl"
        variant="subtle"
        component="a"
        target="_blank"
        href={companyFbLink}
        size={size}
        sx={() => ({
          color: color,
          '&:hover': {
            backgroundColor: hoverBgColor,
            color: hoverColor,
          },
        })}
        className={transforms.hoverUpTransformation}
      >
        <Icon icon="ic:round-facebook" width="75%" />
      </ActionIcon>
      <ActionIcon
        color={color ?? 'brand'}
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
        className={transforms.hoverUpTransformation}
      >
        <Icon icon="mdi:instagram" width="75%" color={color} />
      </ActionIcon>
      <ActionIcon
        color={color ?? 'brand'}
        radius="xl"
        variant="subtle"
        component="a"
        target="_blank"
        href={companyTiktokLink}
        size={size}
        sx={() => ({
          '&:hover': {
            backgroundColor: hoverBgColor,
            color: hoverColor,
          },
        })}
        className={transforms.hoverUpTransformation}
      >
        <Icon icon="ic:baseline-tiktok" width="75%" color={color} />
      </ActionIcon>
    </Group>
  );
}
