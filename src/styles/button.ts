import { createStyles } from '@mantine/core';

export const useButtonStyles = createStyles((theme) => ({
  secondaryButton: {
    borderWidth: 1,
    borderColor:
      theme.colorScheme === 'dark' ? undefined : theme.colors.gray[3],
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.neutral[1]
        : theme.colors.dark[4],
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.neutral[1],
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.neutral[0],
    },
    '&:active': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[3]
          : theme.colors.neutral[1],
    },
  },
  tertiaryButton: {
    borderWidth: 0,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.neutral[1]
        : theme.colors.dark[4],
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.neutral[2],
    },
    '&:active': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[3]
          : theme.colors.neutral[2],
    },
  },
}));
