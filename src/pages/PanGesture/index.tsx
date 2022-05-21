import React from 'react';
import { Text, View } from 'react-native';
import type { PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import { clamp, withBouncing } from 'react-native-redash';

import { Background, Header, HyperComponent } from '@mobile/components';
import { PanGestureConstants } from '@mobile/constants';
import useDimensions from '@mobile/hooks/useDimensions';
import theme from '@mobile/theme';

const PanGesture: React.FC = () => {
  const { width, height } = useDimensions();
  const boundX = width - PanGestureConstants.CARD_WIDTH;
  const boundY = height - PanGestureConstants.CARD_HEIGHT;
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      offsetX: number;
      offsetY: number;
    }
  >({
    onStart: (_, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = clamp(ctx.offsetX + event.translationX, 0, boundX);
      translateY.value = clamp(ctx.offsetY + event.translationY, 0, boundY);
    },
    onEnd: ({ velocityX, velocityY }) => {
      translateX.value = withBouncing(
        withDecay({
          velocity: velocityX,
        }),
        0,
        boundX
      );
      translateY.value = withBouncing(
        withDecay({
          velocity: velocityY,
        }),
        0,
        boundY
      );
    },
  });

  const style = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <HyperComponent backgroundColor={theme.colors.background}>
      <Header title="Pan Gesture" />
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View {...{ style }}>
          <View
            style={{
              width: PanGestureConstants.CARD_WIDTH,
              height: PanGestureConstants.CARD_HEIGHT,
              backgroundColor: theme.colors.components,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontWeight: '700' }}>DRAG ME!</Text>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </HyperComponent>
  );
};

export default PanGesture;
