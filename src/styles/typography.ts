import { createStyles } from '@mantine/core';

export const useTypoStyles = createStyles((theme) => {
  const titleColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[5];
  const textColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.dark[3];
  const brandColor =
    theme.colorScheme === 'dark'
      ? theme.colors.brand[5]
      : theme.colors.brand[8];
  return {
    heading0: {
      fontSize: 32,
      color: titleColor,
      fontWeight: 700,
      lineHeight: 1.5,
      fontFamily: theme.fontFamily,
      [theme.fn.largerThan('sm')]: {
        fontSize: 44,
        fontWeight: 700,
      },
    },
    heading1: {
      fontSize: 22,
      color: titleColor,
      fontWeight: 800,
      lineHeight: 1.5,
      [theme.fn.largerThan('sm')]: {
        fontSize: 32,
        fontWeight: 700,
      },
    },
    heading2: {
      fontSize: 20,
      lineHeight: 1.5,
      color: titleColor,
      fontWeight: 600,
      [theme.fn.largerThan('sm')]: {
        fontSize: 26,
        fontWeight: 700,
      },
    },
    heading3: {
      fontSize: 18,
      lineHeight: 1.5,
      color: titleColor,
      fontWeight: 600,
      [theme.fn.largerThan('sm')]: {
        fontSize: 22,
      },
    },
    heading4: {
      fontSize: 16,
      lineHeight: 1.5,
      fontWeight: 600,
      color: titleColor,
      [theme.fn.largerThan('sm')]: {
        fontSize: 18,
      },
    },
    heading5: {
      fontSize: 14,
      lineHeight: 1.5,
      fontWeight: 600,
      color: titleColor,
      [theme.fn.largerThan('sm')]: {
        fontSize: 16,
      },
    },
    heading6: {
      fontSize: 12,
      lineHeight: 1.5,
      fontWeight: 500,
      color: titleColor,
      [theme.fn.largerThan('sm')]: {
        fontSize: 14,
      },
    },

    // Heading Size Only

    heading0SizeOnly: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 1.5,
      [theme.fn.largerThan('sm')]: {
        fontSize: 44,
        fontWeight: 800,
      },
    },
    heading1SizeOnly: {
      fontSize: 22,
      fontWeight: 600,
      lineHeight: 1.5,
      [theme.fn.largerThan('sm')]: {
        fontSize: 32,
        fontWeight: 700,
      },
    },
    heading2SizeOnly: {
      fontSize: 20,
      lineHeight: 1.5,
      fontWeight: 600,
      [theme.fn.largerThan('sm')]: {
        fontSize: 26,
        fontWeight: 700,
      },
    },
    heading3SizeOnly: {
      fontSize: 18,
      lineHeight: 1.5,
      fontWeight: 600,
      [theme.fn.largerThan('sm')]: {
        fontSize: 22,
      },
    },
    heading4SizeOnly: {
      fontSize: 16,
      lineHeight: 1.5,
      fontWeight: 600,
      [theme.fn.largerThan('sm')]: {
        fontSize: 18,
      },
    },
    heading5SizeOnly: {
      fontSize: 14,
      lineHeight: 1.5,
      fontWeight: 600,
      [theme.fn.largerThan('sm')]: {
        fontSize: 16,
      },
    },
    heading6SizeOnly: {
      fontSize: 12,
      lineHeight: 1.5,
      fontWeight: 500,
      [theme.fn.largerThan('sm')]: {
        fontSize: 14,
      },
    },
    bodyXxs: {
      fontSize: 10,
      lineHeight: 1.6,
      color: textColor,
      fontWeight: 400,
      [theme.fn.largerThan('sm')]: {
        fontSize: 12,
      },
    },
    bodyXs: {
      fontSize: 12,
      lineHeight: 1.6,
      color: textColor,
      [theme.fn.largerThan('sm')]: {
        fontSize: 14,
      },
    },
    bodySm: {
      fontSize: 14,
      color: textColor,
      lineHeight: 1.6,
      [theme.fn.largerThan('sm')]: {
        fontSize: 16,
      },
    },
    bodyMd: {
      fontSize: 16,
      color: textColor,
      fontWeight: 400,
      lineHeight: 1.6,
      [theme.fn.largerThan('sm')]: {
        fontSize: 18,
      },
    },
    bodyLg: {
      fontSize: 18,
      lineHeight: 1.6,
      fontWeight: 400,
      color: textColor,
      [theme.fn.largerThan('sm')]: {
        fontSize: 20,
      },
    },
    bodyXl: {
      fontSize: 20,
      lineHeight: 1.6,
      fontWeight: 400,
      color: textColor,
      [theme.fn.largerThan('sm')]: {
        fontSize: 22,
      },
    },

    // Body Only Size
    bodyXxsSizeOnly: {
      fontSize: 10,
      lineHeight: 1.6,
      [theme.fn.largerThan('sm')]: {
        fontSize: 12,
      },
    },
    bodyXsSizeOnly: {
      fontSize: 12,
      lineHeight: 1.6,
      [theme.fn.largerThan('sm')]: {
        fontSize: 14,
      },
    },
    bodySmSizeOnly: {
      fontSize: 14,
      lineHeight: 1.6,
      [theme.fn.largerThan('sm')]: {
        fontSize: 16,
      },
    },
    bodyMdSizeOnly: {
      fontSize: 16,
      lineHeight: 1.6,
      [theme.fn.largerThan('sm')]: {
        fontSize: 18,
      },
    },
    bodyLgSizeOnly: {
      fontSize: 18,
      lineHeight: 1.6,
      [theme.fn.largerThan('sm')]: {
        fontSize: 20,
      },
    },
    bodyXlSizeOnly: {
      fontSize: 20,
      lineHeight: 1.6,
      [theme.fn.largerThan('sm')]: {
        fontSize: 22,
      },
    },

    // anchor
    anchorStyle: {
      color: brandColor,
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    plainAnchor: {
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  };
});
