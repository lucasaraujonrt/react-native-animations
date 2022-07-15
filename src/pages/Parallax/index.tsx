import React from 'react';
import { Text } from 'react-native';
import Animated, {
  Easing,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Header, HyperComponent } from '@mobile/components';
import theme from '@mobile/theme';

const Parallax: React.FC = () => {
  const translateY = useSharedValue(0);
  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      if (
        lastContentOffset.value > event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = 0;
      } else if (
        lastContentOffset.value < event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = 100;
      }
      lastContentOffset.value = event.contentOffset.y;
    },
    onBeginDrag: () => {
      isScrolling.value = true;
    },
    onEndDrag: () => {
      isScrolling.value = false;
    },
  });

  const actionBarStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withTiming(translateY.value, {
          duration: 200,
          easing: Easing.inOut(Easing.ease),
        }),
      },
    ],
  }));

  return (
    <HyperComponent backgroundColor={theme.colors.background}>
      <Header title="Parallax" />
      <Animated.ScrollView {...{ onScroll }} style={{ flex: 1 }}>
        <Text style={{ color: 'white' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          laboriosam quae non minus sed eligendi iusto illum enim quam,
          architecto deserunt dolorum nostrum mollitia dolore, recusandae quidem
          veritatis eos. Deleniti? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Accusamus laboriosam quae non minus sed eligendi
          iusto illum enim quam, architecto deserunt dolorum nostrum mollitia
          dolore, recusandae quidem veritatis eos. Deleniti?Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Accusamus laboriosam quae non
          minus sed eligendi iusto illum enim quam, architecto deserunt dolorum
          nostrum mollitia dolore, recusandae quidem veritatis eos.
          Deleniti?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Accusamus laboriosam quae non minus sed eligendi iusto illum enim
          quam, architecto deserunt dolorum nostrum mollitia dolore, recusandae
          quidem veritatis eos. Deleniti?Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Accusamus laboriosam quae non minus sed eligendi
          iusto illum enim quam, architecto deserunt dolorum nostrum mollitia
          dolore, recusandae quidem veritatis eos. Deleniti?Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Accusamus laboriosam quae non
          minus sed eligendi iusto illum enim quam, architecto deserunt dolorum
          nostrum mollitia dolore, recusandae quidem veritatis eos.
          Deleniti?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Accusamus laboriosam quae non minus sed eligendi iusto illum enim
          quam, architecto deserunt dolorum nostrum mollitia dolore, recusandae
          quidem veritatis eos. Deleniti?Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Accusamus laboriosam quae non minus sed eligendi
          iusto illum enim quam, architecto deserunt dolorum nostrum mollitia
          dolore, recusandae quidem veritatis eos. Deleniti?Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Accusamus laboriosam quae non
          minus sed eligendi iusto illum enim quam, architecto deserunt dolorum
          nostrum mollitia dolore, recusandae quidem veritatis eos.
          Deleniti?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Accusamus laboriosam quae non minus sed eligendi iusto illum enim
          quam, architecto deserunt dolorum nostrum mollitia dolore, recusandae
          quidem veritatis eos. Deleniti?Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Accusamus laboriosam quae non minus sed eligendi
          iusto illum enim quam, architecto deserunt dolorum nostrum mollitia
          dolore, recusandae quidem veritatis eos. Deleniti?Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Accusamus laboriosam quae non
          minus sed eligendi iusto illum enim quam, architecto deserunt dolorum
          nostrum mollitia dolore, recusandae quidem veritatis eos. Deleniti?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          laboriosam quae non minus sed eligendi iusto illum enim quam,
          architecto deserunt dolorum nostrum mollitia dolore, recusandae quidem
          to deserunt dolorum nostrum mollitia dolore, recusandae quidem
          veritatis eos. Deleniti?Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Accusamus laboriosam quae non minus sed eligendi
          iusto illum enim quam, architecto deserunt dolorum nostrum mollitia
          dolore, recusandae quidem veritatis eos. Deleniti?Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Accusamus laboriosam quae non
          minus sed eligendi iusto illum enim quam, architecto deserunt dolorum
          nostrum mollitia dolore, recusandae quidem veritatis eos.
          Deleniti?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Accusamus laboriosam quae non minus sed eligendi iusto illum enim
          quam, architecto deserunt dolorum nostrum mollitia dolore, recusandae
          quidem veritatis eos. Deleniti?Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Accusamus laboriosam quae non minus sed eligendi
          iusto illum enim quam, architecto deserunt dolorum nostrum mollitia
          dolore, recusandae quidem veritatis eos. Deleniti? Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Accusamus laboriosam quae non
          minus sed eligendi iusto illum enim quam, architecto deserunt dolorum
          nostrum mollitia dolore, recusandae quidem
        </Text>
      </Animated.ScrollView>
      <Animated.View
        style={[
          actionBarStyle,
          {
            position: 'absolute',
            width: '60%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            alignSelf: 'center',
            bottom: 40,
            padding: 10,
            borderRadius: 20,
          },
        ]}
      >
        <Text>Action here</Text>
      </Animated.View>
    </HyperComponent>
  );
};
export default Parallax;
