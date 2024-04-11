import { Button, List } from '@mantine/core';
import { IconArrowUpRight, IconSquareRoundedPlus } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { companyMailToLink, menus } from '@/data';

import { useTypoStyles } from '@/styles';

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
  const { classes: typo } = useTypoStyles();

  return (
    <nav className={cx(props.className, classes.nav)}>
      <List className={classes.menuUnorderedList}>
        {menus.map((menu, i) => {
          return (
            <List.Item
              key={menu.link}
              className={
                activeLink?.link === menu.link
                  ? cx(typo.bodyMd, classes.oneMenu, classes.activeMenu)
                  : cx(typo.bodyMd, classes.oneMenu)
              }
            >
              <Link
                key={i}
                href={menu.link}
                target={menu.openInNewTab ? '_blank' : undefined}
              >
                <span>{menu.title}</span>
                {menu.openInNewTab && <IconArrowUpRight size={14} />}
              </Link>
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
  );
}
