import { createStyles } from '@mantine/core';

export const useButtonStyles = createStyles((theme) => ({
  secondaryButton: {
    borderWidth: 1,
    borderColor: 'rgba(26, 28, 56, 0.1)',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.neutral[1]
        : theme.colors.dark[5],
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.neutral[0],
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[3]
          : theme.colors.neutral[1],
      borderColor: 'rgba(26, 28, 56, 0.2)',
    },
    '&:active': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[3]
          : theme.colors.neutral[1],
    },
  },
}));
