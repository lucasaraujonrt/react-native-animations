import React from 'react';
import { FlatList } from 'react-native';

import Bezier from '@mobile/assets/svg/components/sandbox/ic_bezier.svg';
import Cubic from '@mobile/assets/svg/components/sandbox/ic_cubic.svg';
import Drag from '@mobile/assets/svg/components/sandbox/ic_drag.svg';
import Graph from '@mobile/assets/svg/components/sandbox/ic_graph.svg';
import Mind from '@mobile/assets/svg/components/sandbox/ic_mind.svg';
import Pan from '@mobile/assets/svg/components/sandbox/ic_pan.svg';
import Phone from '@mobile/assets/svg/components/sandbox/ic_phone.svg';
import Tinder from '@mobile/assets/svg/components/sandbox/ic_tinder.svg';
import {
  AnimationList as List,
  AnimationCard,
  Header,
  HyperComponent,
} from '@mobile/components';
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
    disabled: false,
  },
  {
    name: 'Drag',
    navigateTo: 'Drag',
    type: 'reanimated',
    icon: <Drag />,
    disabled: false,
  },
  {
    name: 'Bezier',
    navigateTo: 'BezierCurves',
    type: 'reanimated',
    icon: <Bezier />,
    disabled: false,
  },
  {
    name: 'Trigonometry',
    navigateTo: 'Trigonometry',
    type: 'reanimated',
    icon: <Bezier />,
    disabled: true,
  },
];

const Home = () => {
  const title = 'Sandbox';

  return (
    <HyperComponent backgroundColor={theme?.colors?.background}>
      <Header {...{ title }} />
      <FlatList
        data={AnimationList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <List {...{ index }}>
            <AnimationCard {...item} />
          </List>
        )}
      />
    </HyperComponent>
  );
};

export default Home;
