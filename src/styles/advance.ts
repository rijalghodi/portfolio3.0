import { createStyles } from '@mantine/core';

export const useShadowStyles = createStyles(() => ({
  heavyShadow: {
    boxShadow: '0px 4px 40px 0px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      boxShadow: '0px 6px 80px 0px rgba(0, 0, 0, 0.1)',
    },
  },
  defaultShadow: {
    boxShadow: '0px 1px 30px 0px rgba(0, 0, 0, 0.01)',
  },

  hoveredDefaultShadow: {
    boxShadow: '0px 1px 30px 0px rgba(0, 0, 0, 0.01)',
    '&:hover': {
      boxShadow: '0px 2px 60px 0px rgba(0, 0, 0, 0.05)',
    },
  },
  upShadow: {
    boxShadow: '0px -1px 30px 0px rgba(0, 0, 0, 0.01)',
  },
}));

export const useTransformationnStyles = createStyles(() => ({
  hoverUpTransformation: {
    transition: 'all .3s ease-out',
    '&:hover': {
      transform: 'translate(0, -6px)',
    },
  },
}));
