import React from 'react';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { clamp } from 'react-native-redash';

export const CONTROL_POINT_RADIUS = 20;

type Offset = { x: number; y: number };

interface ControlPointProps {
  x: Animated.SharedValue<number>;
  y: Animated.SharedValue<number>;
  min: number;
  max: number;
}

const ControlPoint = ({ x, y, min, max }: ControlPointProps) => {
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    Offset
  >({
    onStart: (_, ctx) => {
      ctx.x = x.value;
      ctx.y = y.value;
    },
    onActive: ({ translationX, translationY }, ctx) => {
      x.value = clamp(ctx.x + translationX, min, max);
      y.value = clamp(ctx.y + translationY, min, max);
    },
  });
  const style = useAnimatedStyle(() => ({
    transform: [
      { translateX: x.value - CONTROL_POINT_RADIUS },
      { translateY: y.value - CONTROL_POINT_RADIUS },
    ],
  }));

  return (
    <PanGestureHandler {...{ onGestureEvent }}>
      <Animated.View
        style={[
          style,
          {
            position: 'absolute',
            width: CONTROL_POINT_RADIUS * 2,
            height: CONTROL_POINT_RADIUS * 2,
          },
        ]}
      />
    </PanGestureHandler>
  );
};

export default ControlPoint;
