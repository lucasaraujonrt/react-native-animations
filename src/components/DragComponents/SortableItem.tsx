import React from 'react';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export interface ISortableItemProps {
  index: number;
  offsets: Array<{ y: Animated.SharedValue<number> }>;
  children: React.ReactElement;
  height: number;
  width: number;
  activeCard: Animated.SharedValue<number>;
}

export const SortableItem = ({
  index,
  offsets,
  children,
  height,
  width,
  activeCard,
}: ISortableItemProps) => {
  const currentOffset = offsets[index];
  const isGestureActive = useSharedValue(false);
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      offsetY: number;
    }
  >({
    onStart: (_event, ctx) => {
      isGestureActive.value = true;
      activeCard.value = index;
      ctx.offsetY = currentOffset.y.value;
    },
    onActive: (event, ctx) => {
      x.value = event.translationX;
      y.value = event.translationY + ctx.offsetY;
      const offsetY = Math.round(y.value / height) * height;
      offsets.forEach((offset, i) => {
        if (offset.y.value === offsetY && index !== i) {
          offset.y.value = currentOffset.y.value;
          currentOffset.y.value = offsetY;
        }
      });
    },
    onEnd: () => {
      isGestureActive.value = false;
      x.value = withSpring(0);
      y.value = withSpring(currentOffset.y.value);
    },
  });
  const translateY = useDerivedValue(() => {
    if (isGestureActive.value) {
      return y.value;
    }

    return withSpring(currentOffset.y.value);
  });
  const style = useAnimatedStyle(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    height,
    width,
    zIndex: activeCard.value === index ? 100 : 1,
    transform: [
      { translateY: translateY.value },
      { translateX: x.value },
      { scale: isGestureActive.value ? 1.05 : 1 },
    ],
  }));

  return (
    <PanGestureHandler {...{ onGestureEvent }}>
      <Animated.View style={style}>{children}</Animated.View>
    </PanGestureHandler>
  );
};
