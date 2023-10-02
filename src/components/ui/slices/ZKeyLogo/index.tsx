import { useMantineColorScheme } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

import logoDefault from '~/zslice-logo-default.svg';
import logoNoBg from '~/zslice-logo-no-bg.svg';

type Props = {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  fill?: boolean | undefined;
};
export function ZKeyLogo(props: Props) {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Image
      src={colorScheme === 'dark' ? logoNoBg : logoDefault}
      alt="Logo"
      width={36}
      height={36}
      {...props}
    ></Image>
  );
}
