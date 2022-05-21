import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withDecay,
} from 'react-native-reanimated';

import type { Path } from '@mobile/animation/helpers/SVG';
import type { DataPoint } from '@mobile/components/Label';
import theme from '@mobile/theme';

const { width } = Dimensions.get('window');

const CURSOR = 100;
const styles = StyleSheet.create({
  cursorContainer: {
    width: CURSOR,
    height: CURSOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cursor: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: theme.colors.homePurple,
    borderWidth: 4,
    backgroundColor: 'white',
  },
});

interface CursorProps {
  path: Path;
  length: Animated.SharedValue<number>;
  point: Animated.SharedValue<DataPoint>;
}

const Cursor = ({ path, length, point }: CursorProps) => {
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      offsetX: number;
      offsetY: number;
    }
  >({
    onStart: (event, ctx) => {
      ctx.offsetX = interpolate(
        length.value,
        [0, path.length],
        [0, width],
        Extrapolate.CLAMP
      );
    },
    onActive: (event, ctx) => {
      length.value = interpolate(
        ctx.offsetX + event.translationX,
        [0, width],
        [0, path.length],
        Extrapolate.CLAMP
      );
    },

    onEnd: ({ velocityX: velocity }) => {
      length.value = withDecay({ velocity, clamp: [0, path.length] });
    },
  });

  const style = useAnimatedStyle(() => {
    const translateX = point.value?.coord?.x - CURSOR / 2;
    const translateY = point.value?.coord?.y - CURSOR / 2;

    return {
      transform: [{ translateX }, { translateY }],
    };
  });

  return (
    <View style={StyleSheet.absoluteFill}>
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View style={[styles.cursorContainer, style]}>
          <View style={styles.cursor} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Cursor;
