import { MantineThemeOverride } from '@mantine/core';

export const mantineTheme: MantineThemeOverride = {
  // fontFamily: 'Cooming soon, cursive',
  fontFamily: 'Inter, sans-serif',
  spacing: { xs: '12px', sm: '16px', md: '24px', lg: '32px', xl: '40px' },
  radius: { xs: '12px', sm: '16px', md: '24px', lg: '32px', xl: '40px' },

  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 576,
          sm: 768,
          md: 992,
          lg: 1200,
          xl: 1400,
        },
      },
    },
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
  },
  headings: {
    // properties for all headings\
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600px',

    // properties for individual headings, all of them are optional
    sizes: {
      h1: { fontSize: '34px', fontWeight: '600', lineHeight: '1.5' },
      h2: { fontSize: '26px', fontWeight: '600', lineHeight: '1.5' },
      h3: { fontSize: '22px', fontWeight: '600', lineHeight: '1.5' },
      h4: { fontSize: '18px', fontWeight: '600', lineHeight: '1.5' },
      h5: { fontSize: '16px', fontWeight: '600', lineHeight: '1.5' },
      h6: { fontSize: '14px', fontWeight: '600', lineHeight: '1.5' },
    },
  },

  colors: {
    brand: [
      '#DCF6CB', // 0
      '#B9ED96', // 1
      '#A2E774', // 2
      '#96E462', // 3
      '#8BE052', // 4
      '#7FDD40', // 5
      '#73DC2E', // 6
      '#69D123', // 7
      '#60BF22', // 8
      '#58AE1E', // 9
    ],
    neutral: [
      '#FFFFFF', // 0
      '#F1F9F5', // 1
      '#E9F6F1', // 2
      '#E2F3ED', // 3
      '#D4EDE4', // 4
      '#C5E7DB', // 5
      '#B7E1D2', // 6
      '#A9DBC9', // 7
      '#9AD5BF', // 8
      '#8CCFB6', // 9
    ],
    dark: [
      '#E1E6EA',
      '#B5BFC8',
      '#8494A4',
      '#213E5B',
      '#213E5B',
      '#233343',
      '#1A2638',
      '#05192D',
      '#041120',
      '#020C17',
    ],
  },

  primaryColor: 'brand',
  primaryShade: 8,

  globalStyles: (theme) => ({
    '.rootYPaddings': {
      paddingBottom: '2rem',
      paddingTop: '2rem',
    },
    '.innerYPaddings': {
      paddingBottom: '0.5rem',
      paddingTop: '0.5rem',
    },
    '.paddings': {
      padding: theme.spacing.xs,
    },
    '.textPrimaryClr': {
      color: theme.colors.violet[6],
    },
  }),
};
