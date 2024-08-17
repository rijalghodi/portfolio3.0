import { MantineThemeOverride } from '@mantine/core';

export const mantineTheme: MantineThemeOverride = {
  // fontFamily: 'Cooming soon, cursive',
  spacing: { xs: '12px', sm: '16px', md: '24px', lg: '32px', xl: '40px' },
  radius: { xs: '12px', sm: '16px', md: '24px', lg: '32px', xl: '40px' },
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
  lineHeight: '1.75',

  shadows: {
    xs: '0px 1px 15px 0px rgba(0, 0, 0, 0.01)',
    sm: '0px 1px 30px 0px rgba(0, 0, 0, 0.01)',
    md: '0px 4px 30px 0px rgba(0, 0, 0, .05)',
    lg: '0px 4px 24px 0px rgba(0, 0, 0, .1)',
    xl: '0px 4px 40px 0px rgba(0, 0, 0, 0.1)',
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
    fontWeight: '600',

    // properties for individual headings, all of them are optional
    sizes: {
      h1: { fontSize: '34px', fontWeight: '700', lineHeight: '1.5' },
      h2: { fontSize: '26px', fontWeight: '700', lineHeight: '1.5' },
      h3: { fontSize: '22px', fontWeight: '700', lineHeight: '1.5' },
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
      '#FAFAFA', // 0
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
      '#C4CDD4', // 0
      '#B5BFC8', // 1
      '#8494A4', // 2
      '#526980', // 3
      '#354C65', // 4
      '#233343', // 5
      '#1A2638', // 6
      '#05192D', // 7
      '#041120', // 8
      '#020C17', // 9
    ],
  },

  white: '#EEEEEE',
  black: '#05192D',

  primaryColor: 'brand',
  primaryShade: 8,
};
