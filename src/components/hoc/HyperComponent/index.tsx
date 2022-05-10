import React from 'react';
import { StatusBar, ViewProps } from 'react-native';

import { hexIsBright } from '@mobile/services/hoc-utils/colors';

import {  Container, Scroll } from './styles';

interface IHyperComponentProps extends ViewProps {
  children: React.ReactNode;
  backgroundColor: string;
  scrollView?: boolean;
}

const HyperComponent = ({ scrollView, children, backgroundColor, ...props }: IHyperComponentProps) => {
  const barStyle = hexIsBright(backgroundColor);

  return (
    <>
      <StatusBar {... { barStyle, backgroundColor }} />
      <Container {...props} {... { backgroundColor }}>
        {scrollView ? (<Scroll {... { backgroundColor }}>{children}</Scroll>) : children}
      </Container>
    </>
  );
};

export default HyperComponent;