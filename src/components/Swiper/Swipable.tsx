import React, { forwardRef, Ref, useImperativeHandle } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { snapPoint } from 'react-native-redash';

import Profile, { A, ProfileModel } from './Profile';

const { width } = Dimensions.get('window');
const snapPoints = [-A, 0, A];

const swipe = (
  translateX: Animated.SharedValue<number>,
  dest: number,
  velocity: number,
  onSwipe: () => void
) => {
  'worklet';

  // eslint-disable-next-line no-param-reassign
  translateX.value = withSpring(
    dest,
    {
      velocity,
      restSpeedThreshold: dest === 0 ? 0.01 : 100,
      restDisplacementThreshold: dest === 0 ? 0.01 : 100,
    },
    () => {
      if (dest !== 0) {
        runOnJS(onSwipe);
      }
    }
  );
};

type Offset = {
  x: number;
  y: number;
};

export interface Swiper {
  swipeLeft: () => void;
  swipeRight: () => void;
}

interface ISwiperProps {
  onSwipe: () => void;
  profile: ProfileModel;
  onTop: boolean;
  scale: Animated.SharedValue<number>;
}

const Swipeable = (
  { profile, onTop, onSwipe, scale }: ISwiperProps,
  ref: Ref<Swiper>
) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  useImperativeHandle(ref, () => ({
    swipeLeft: () => {
      swipe(translateX, -A, 25, onSwipe);
    },
    swipeRight: () => {
      swipe(translateX, A, 25, onSwipe);
    },
  }));
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    Offset
  >({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
      ctx.y = translateY.value;
    },
    onActive: ({ translationX, translationY }, ctx) => {
      translateX.value = translationX + ctx.x;
      translateY.value = translationY + ctx.y;
      scale.value = interpolate(
        translateX.value,
        [-width / 2, 0, width / 2],
        [1, 0.95, 1],
        Extrapolate.CLAMP
      );
    },
    onEnd: ({ velocityX, velocityY }) => {
      const dest = snapPoint(translateX.value, velocityY, snapPoints);
      swipe(translateX, dest, velocityX, onSwipe);
      translateY.value = withSpring(0, { velocity: velocityY });
    },
  });

  return (
    <PanGestureHandler {...{ onGestureEvent }}>
      <Animated.View style={[StyleSheet.absoluteFill]}>
        <Profile
          translateX={translateX}
          translateY={translateY}
          profile={profile}
          onTop={onTop}
          scale={scale}
        />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default forwardRef(Swipeable);
