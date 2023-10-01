import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.lg,
    alignItems: 'flex-start',
  },
  menuUnorderedList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.md,
  },
  oneMenu: {
    display: 'flex',
    gap: 4,
    alignItems: 'center',
    '&:hover': {
      color: theme.colors.brand[7],
    },
  },
  activeMenu: {
    color: theme.colors.brand[7],
  },
}));
