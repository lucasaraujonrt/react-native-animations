import { MotiView } from 'moti';
import React from 'react';
import { FlatList, View } from 'react-native';

import navigationService from '@mobile/services/navigation';

import * as S from './styles';

interface Data {
  id: number;
  title: string;
  icon: React.ReactNode;
  disabled: boolean;
  navigateTo?: string;
}

interface ICarouselAboutMeProps {
  data: Data[];
}

const CarouselAboutMe = ({ data }: ICarouselAboutMeProps) => (
  <S.Map>
    {data.map((item, index) => (
      <MotiView
        delay={1200 * index}
        from={{
          opacity: 0,
          translateX: -20,
        }}
        animate={{
          opacity: 1,
          translateX: 0,
        }}
      >
        <S.Container
          {...{
            disabled: item.disabled,
            key: `key-${index * item.id}`,
            onPress: () =>
              item.navigateTo && navigationService.navigate(item.navigateTo),
          }}
        >
          <S.WrapperIcon>{item.icon}</S.WrapperIcon>
          <S.Text>{item.title}</S.Text>
        </S.Container>
      </MotiView>
    ))}
  </S.Map>
);

export default CarouselAboutMe;
