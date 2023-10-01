import {
  Button,
  Drawer,
  DrawerProps,
  useMantineColorScheme,
} from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { menus } from '@/data';

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
          top: 80,
          right: theme.spacing.sm,
        },
        content: {
          borderRadius: '20px !important',
          padding: theme.spacing.md,
          backgroundColor:
            colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.neutral[2],
        },
      })}
    >
      <nav className={cx(props.className, classes.nav)}>
        <ul className={classes.menuUnorderedList}>
          {menus.map((menu, i) => {
            return (
              <li
                key={menu.link}
                className={
                  activeLink?.link === menu.link
                    ? cx(typo.bodyLg, classes.oneMenu, classes.activeMenu)
                    : cx(typo.bodyLg, classes.oneMenu)
                }
              >
                <Link key={i} href={menu.link}>
                  {menu.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button>Hire Me</Button>
      </nav>
    </Drawer>
  );
}
