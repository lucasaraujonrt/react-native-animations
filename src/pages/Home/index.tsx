import { MotiView } from 'moti';
import React from 'react';
import { FlatList } from 'react-native';
import { Easing } from 'react-native-reanimated';

import Bezier from '@mobile/assets/svg/components/sandbox/ic_bezier.svg';
import Cubic from '@mobile/assets/svg/components/sandbox/ic_cubic.svg';
import Drag from '@mobile/assets/svg/components/sandbox/ic_drag.svg';
import Graph from '@mobile/assets/svg/components/sandbox/ic_graph.svg';
import Mind from '@mobile/assets/svg/components/sandbox/ic_mind.svg';
import Pan from '@mobile/assets/svg/components/sandbox/ic_pan.svg';
import Phone from '@mobile/assets/svg/components/sandbox/ic_phone.svg';
import Tinder from '@mobile/assets/svg/components/sandbox/ic_tinder.svg';
import { AnimationCard, Header, HyperComponent } from '@mobile/components';
import theme from '@mobile/theme';

interface IAnimationList {
  name: string;
  navigateTo: string;
  type: 'moti' | 'reanimated' | 'native';
  icon: React.ReactNode;
  disabled: boolean;
}

const AnimationList: IAnimationList[] = [
  {
    name: 'Someone is Calling',
    navigateTo: 'PhoneCall',
    type: 'moti',
    icon: <Phone />,
    disabled: false,
  },
  {
    name: 'Pan Gesture',
    navigateTo: 'PanGesture',
    type: 'reanimated',
    icon: <Pan />,
    disabled: false,
  },
  {
    name: 'SquareStick',
    navigateTo: 'SquareStick',
    type: 'reanimated',
    icon: <Cubic />,
    disabled: false,
  },
  {
    name: 'Simple Carousel',
    navigateTo: 'AnimatedCarousel',
    type: 'native',
    icon: <Pan />,
    disabled: false,
  },
  {
    name: 'MindBlow',
    navigateTo: 'MindBlow',
    type: 'moti',
    icon: <Mind />,
    disabled: false,
  },
  {
    name: 'Graph',
    navigateTo: 'Graph',
    type: 'reanimated',
    icon: <Graph />,
    disabled: false,
  },
  {
    name: 'Tinder',
    navigateTo: 'Tinder',
    type: 'reanimated',
    icon: <Tinder />,
    disabled: true,
  },
  {
    name: 'Bezier',
    navigateTo: 'Bezier',
    type: 'reanimated',
    icon: <Bezier />,
    disabled: true,
  },
  {
    name: 'Drag',
    navigateTo: 'Drag',
    type: 'reanimated',
    icon: <Drag />,
    disabled: true,
  },
];

const Home = () => {
  const title = 'Sandbox';
  const getDirection = (index: number) =>
    index % 2 ? 'translateX' : 'translateY';

  return (
    <HyperComponent backgroundColor={theme?.colors?.background}>
      <Header {...{ title }} />
      <FlatList
        data={AnimationList}
        showsVerticalScrollIndicator={false}
        style={{ flexGrow: 1 }}
        renderItem={({ item, index }) => (
          <>
            <MotiView
              delay={500 * index}
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
              <AnimationCard {...item} />
            </MotiView>
          </>
        )}
      />
    </HyperComponent>
  );
};

export default Home;
