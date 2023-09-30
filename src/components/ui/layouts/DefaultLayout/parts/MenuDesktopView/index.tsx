import { Button } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { menus } from '@/data';

import { useStyles } from './styles';

type Props = {
  className?: string;
};

export function MenuDesktopView(props: Props) {
  const router = useRouter();
  const activeLink = React.useMemo(() => {
    const pathArray = router.pathname.split('/');
    const cleanedPath = `/${pathArray[1]}`;
    const link = menus.find((menu) => menu.link === cleanedPath);
    return link;
  }, [router.pathname]);

  const { classes, cx } = useStyles();

  return (
    <nav className={cx(props.className, classes.nav)}>
      <ul className={classes.menuUnorderedList}>
        {menus.map((menu, i) => {
          return (
            <li
              key={menu.link}
              className={
                activeLink?.link === menu.link
                  ? cx(classes.oneMenu, classes.activeMenu)
                  : classes.oneMenu
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
  );
}
