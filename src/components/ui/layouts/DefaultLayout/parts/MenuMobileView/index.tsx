import {
  Button,
  Drawer,
  DrawerProps,
  List,
  useMantineColorScheme,
} from '@mantine/core';
import { IconArrowUpRight, IconSquareRoundedPlus } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { companyMailToLink, menus } from '@/data';

import { useTypoStyles } from '@/styles';

import { useStyles } from './styles';

export function MenuMobileView(props: DrawerProps) {
  const router = useRouter();
  const activeLink = React.useMemo(() => {
    const pathArray = router.pathname.split('/');
    const cleanedPath = `/${pathArray[1]}`;
    const link = menus.find((menu) => menu.link === cleanedPath);
    return link;
  }, [router.pathname]);

  const { classes, cx } = useStyles();
  const { classes: typo } = useTypoStyles();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Drawer
      {...props}
      position="right"
      withOverlay={true}
      overlayProps={{
        opacity: 0,
      }}
      size={280}
      withCloseButton={false}
      styles={(theme) => ({
        root: {
          top: '80px !important',
          backgroundColor: 'transparent',
        },
        inner: {
          top: 90,
          right: theme.spacing.sm,
        },
        content: {
          borderWidth: '1px !important',
          // border: '1px solid black',
          borderStyle: 'solid',
          borderColor:
            colorScheme === 'dark'
              ? theme.colors.dark[4]
              : theme.colors.gray[3],
          borderRadius: '16px !important',
          padding: theme.spacing.md,
          backgroundColor:
            colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.neutral[0],
        },
      })}
    >
      <nav className={cx(props.className, classes.nav)}>
        <List className={classes.menuUnorderedList}>
          {menus.map((menu, i) => {
            return (
              <List.Item
                key={menu.link}
                className={
                  activeLink?.link === menu.link
                    ? cx(
                        typo.bodyXlSizeOnly,
                        classes.oneMenu,
                        classes.activeMenu,
                      )
                    : cx(typo.bodyXlSizeOnly, classes.oneMenu)
                }
                onClick={props.onClose}
              >
                <Link
                  key={i}
                  href={menu.link}
                  target={menu.openInNewTab ? '_blank' : undefined}
                >
                  {menu.title}
                </Link>
                {menu.openInNewTab && <IconArrowUpRight size={14} />}
              </List.Item>
            );
          })}
        </List>
        <Button
          leftIcon={<IconSquareRoundedPlus size={16} />}
          component="a"
          href={companyMailToLink}
        >
          Hire Me
        </Button>
      </nav>
    </Drawer>
  );
}
