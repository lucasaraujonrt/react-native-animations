import React from 'react';

import navigationService from '@mobile/services/navigation';

import * as S from './styles';

interface IAnimationCardProps {
  name: string;
  type: 'moti' | 'reanimated' | 'native';
  navigateTo: string;
  icon: React.ReactNode;
  disabled: boolean;
}

const AnimationCard = ({
  navigateTo,
  type,
  name,
  icon,
  disabled,
}: IAnimationCardProps) => (
  <S.Container
    {...{ onPress: () => navigationService.navigate(navigateTo), disabled }}
  >
    <S.Wrapper>
      <S.WrapperIcon>{icon}</S.WrapperIcon>
      <S.WrapperText>
        <S.Text>{name}</S.Text>
      </S.WrapperText>
    </S.Wrapper>
    <S.SecondWrapper>
      <S.WrapperType>
        <S.Type>{type}</S.Type>
      </S.WrapperType>
    </S.SecondWrapper>
  </S.Container>
);

export default AnimationCard;
