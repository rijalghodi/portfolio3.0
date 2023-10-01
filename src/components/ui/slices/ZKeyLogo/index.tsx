import { useMantineColorScheme } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

import zKeyLogoDefault from '~/zkey-logo-default.svg';
import zKeyLogoNoBg from '~/zkey-logo-no-bg.svg';

type Props = {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  fill?: boolean | undefined;
};
export function ZKeyLogo(props: Props) {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Image
      src={colorScheme === 'dark' ? zKeyLogoNoBg : zKeyLogoDefault}
      alt="Logo"
      width={36}
      height={36}
      {...props}
    ></Image>
  );
}
