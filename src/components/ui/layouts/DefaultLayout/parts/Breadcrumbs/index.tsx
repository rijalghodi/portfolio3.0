import { Breadcrumbs as MantineBreadcrumbs } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

import { useTypoStyles } from '@/styles';

type Props = {
  breadcrumbs?: { label: string; href: string }[];
};

export default function Breadcrumbs({ breadcrumbs }: Props) {
  const { classes: typo } = useTypoStyles();
  return (
    <MantineBreadcrumbs separator={<IconChevronRight size={16} />}>
      {breadcrumbs?.map((breadcrumb, index) => (
        <Link
          href={breadcrumb.href}
          key={index}
          style={{ fontSize: 14 }}
          className={typo.plainAnchor}
        >
          {breadcrumb.label}
        </Link>
      ))}
    </MantineBreadcrumbs>
  );
}
