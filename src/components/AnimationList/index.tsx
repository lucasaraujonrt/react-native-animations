import { MotiView } from 'moti';
import React from 'react';
import { View } from 'react-native';
import { Easing } from 'react-native-reanimated';

import { getDirection } from '@mobile/animation/helpers/directions';

// import { Container } from './styles';

interface IAnimationListProps {
  index: number;
  children: React.ReactElement;
}

const AnimationList = ({ children, index }: IAnimationListProps) => (
  <MotiView
    delay={300 * index}
    from={{
      opacity: 0,
      scale: 0.5,
      [getDirection(index)]: -20,
    }}
    animate={{
      opacity: 1,
      scale: 1,
      [getDirection(index)]: 0,
    }}
    transition={{
      type: 'spring',
      duration: 3500,
      scale: {
        delay: 50,
      },
      easing: Easing.out(Easing.bounce),
    }}
  >
    {children}
  </MotiView>
);

export default AnimationList;
