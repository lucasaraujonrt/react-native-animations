import { MotiView } from 'moti';
import React from 'react';

import navigationService from '@mobile/services/navigation';

import * as S from './style';

interface IHeaderProps {
  title: string;
}

const Header = ({ title }: IHeaderProps) => (
  <S.Container onPress={navigationService.back}>
    <MotiView
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      style={{
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <S.WrapperArrow>
        <S.Arrow />
      </S.WrapperArrow>
      <S.Title>{title}</S.Title>
    </MotiView>
  </S.Container>
);

export default Header;
