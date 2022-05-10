import React from 'react';
import { StatusBar } from 'react-native';

import * as S from './Background.styles';

interface IBackground {
  children: React.ReactNode;
  backgroundColor?: string;
  scrollView?: boolean;
  barStyle: 'light-content' | 'default' | 'dark-content';
}

const Background = ({
  backgroundColor,
  children,
  scrollView,
  barStyle,
}: IBackground) => (
  <>
    <StatusBar
      barStyle={barStyle}
      animated
      translucent
      backgroundColor={backgroundColor}
    />
    {scrollView ? (
      <S.ScrollView backgroundColor={backgroundColor}>
        {children}
      </S.ScrollView>
      ) : (
        <S.Container backgroundColor={backgroundColor}>{children}</S.Container>
      )}
  </>
  );

export default Background;
