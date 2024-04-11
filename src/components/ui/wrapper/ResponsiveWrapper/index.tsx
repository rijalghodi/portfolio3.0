import { Container, ContainerProps } from '@mantine/core';
import React from 'react';

type Props = ContainerProps;

export function ResponsiveWrapper(props: Props) {
  return (
    <Container maw={1000} mx="auto" {...props}>
      {props.children}
    </Container>
  );
}
