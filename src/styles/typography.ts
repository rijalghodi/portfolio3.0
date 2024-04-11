import { createStyles } from '@mantine/core';

export const useTypoStyles = createStyles((theme) => {
  const titleColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[5];
  const textColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.dark[4];
  const brandColor =
    theme.colorScheme === 'dark'
      ? theme.colors.brand[5]
      : theme.colors.brand[8];
  return {
    heading0: {
      fontSize: 32,
      color: titleColor,
      fontWeight: 700,
      lineHeight: 1.3,
      fontFamily: theme.fontFamily,
      [theme.fn.largerThan('sm')]: {
        fontSize: 44,
        fontWeight: 800,
      },
    },
    heading1: {
      fontSize: 22,
      color: titleColor,
      fontWeight: 800,
      lineHeight: 1.3,
      [theme.fn.largerThan('sm')]: {
        fontSize: 32,
        fontWeight: 700,
      },
    },
    heading2: {
      fontSize: 20,
      lineHeight: 1.35,
      color: titleColor,
      fontWeight: 600,
      [theme.fn.largerThan('sm')]: {
        fontSize: 26,
        fontWeight: 700,
      },
    },
    heading3: {
      fontSize: 18,
      lineHeight: 1.4,
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
      lineHeight: 1.3,
      [theme.fn.largerThan('sm')]: {
        fontSize: 44,
        fontWeight: 800,
      },
    },
    heading1SizeOnly: {
      fontSize: 22,
      fontWeight: 600,
      lineHeight: 1.3,
      [theme.fn.largerThan('sm')]: {
        fontSize: 32,
        fontWeight: 700,
      },
    },
    heading2SizeOnly: {
      fontSize: 20,
      lineHeight: 1.35,
      fontWeight: 600,
      [theme.fn.largerThan('sm')]: {
        fontSize: 26,
        fontWeight: 700,
      },
    },
    heading3SizeOnly: {
      fontSize: 18,
      lineHeight: 1.4,
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
      fontSize: 8,
      lineHeight: 1.5,
      color: textColor,
      [theme.fn.largerThan('sm')]: {
        fontSize: 10,
      },
    },
    bodyXs: {
      fontSize: 10,
      lineHeight: 1.5,
      color: textColor,
      [theme.fn.largerThan('sm')]: {
        fontSize: 12,
      },
    },
    bodySm: {
      fontSize: 12,
      color: textColor,
      lineHeight: 1.5,
      [theme.fn.largerThan('sm')]: {
        fontSize: 14,
      },
    },
    bodyMd: {
      fontSize: 16,
      color: textColor,
      lineHeight: 1.5,
    },
    bodyLg: {
      fontSize: 18,
      lineHeight: 1.5,
      color: textColor,
    },
    bodyXl: {
      fontSize: 20,
      lineHeight: 1.5,
      color: textColor,
    },

    // Body Only Size
    bodyXxsSizeOnly: {
      fontSize: 8,
      lineHeight: 1.5,
      [theme.fn.largerThan('sm')]: {
        fontSize: 10,
      },
    },
    bodyXsSizeOnly: {
      fontSize: 10,
      lineHeight: 1.5,
      [theme.fn.largerThan('sm')]: {
        fontSize: 12,
      },
    },
    bodySmSizeOnly: {
      fontSize: 12,
      lineHeight: 1.5,
      [theme.fn.largerThan('sm')]: {
        fontSize: 14,
      },
    },
    bodyMdSizeOnly: {
      fontSize: 14,
      lineHeight: 1.5,
      [theme.fn.largerThan('sm')]: {
        fontSize: 16,
      },
    },
    bodyLgSizeOnly: {
      fontSize: 16,
      lineHeight: 1.5,
      [theme.fn.largerThan('sm')]: {
        fontSize: 18,
      },
    },
    bodyXlSizeOnly: {
      fontSize: 18,
      lineHeight: 1.5,
      [theme.fn.largerThan('sm')]: {
        fontSize: 20,
      },
    },

    // anchor
    anchorStyle: {
      color: brandColor,
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  };
});
