import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  nav: {
    display: 'flex',
    gap: theme.spacing.xl,
    alignItems: 'center',
  },
  menuUnorderedList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    gap: theme.spacing.lg,
  },
  oneMenu: {
    '&:hover': {
      color: theme.colors.brand[7],
    },
  },
  activeMenu: {
    color: theme.colors.brand[7],
  },
}));
