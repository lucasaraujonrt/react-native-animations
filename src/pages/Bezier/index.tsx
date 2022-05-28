import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedProps,
  useSharedValue,
} from 'react-native-reanimated';
import { addCurve, createPath, serialize } from 'react-native-redash';
import Svg, { Line, Path, Circle } from 'react-native-svg';

import { ControlPoint, Header, HyperComponent } from '@mobile/components';
import { CONTROL_POINT_RADIUS } from '@mobile/components/ControlPoint';
import theme from '@mobile/theme';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedLine = Animated.createAnimatedComponent(Line);

const { width } = Dimensions.get('window');
const PADDING = 24;
const SIZE = width;
const STROKE_WIDTH = 4;
const min = PADDING;
const max = SIZE - PADDING;
const start = {
  x: min,
  y: max,
};
const end = {
  x: max,
  y: min,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: SIZE + STROKE_WIDTH,
    height: SIZE + STROKE_WIDTH,
  },
});

const BezierCurves = () => {
  const c1x = useSharedValue(min);
  const c1y = useSharedValue(min);
  const c2x = useSharedValue(max);
  const c2y = useSharedValue(max);

  const path = useAnimatedProps(() => {
    const curve = createPath({ x: start.x, y: start.y });
    addCurve(curve, {
      c1: {
        x: c1x.value,
        y: c1y.value,
      },
      c2: {
        x: c2x.value,
        y: c2y.value,
      },
      to: {
        x: end.x,
        y: end.y,
      },
    });

    return {
      d: serialize(curve),
    };
  });
  const line1 = useAnimatedProps(() => ({
    x2: c1x.value,
    y2: c1y.value,
  }));
  const line2 = useAnimatedProps(() => ({
    x2: c2x.value,
    y2: c2y.value,
  }));

  const circle1 = useAnimatedProps(() => ({
    cx: c1x.value,
    cy: c1y.value,
  }));

  const circle2 = useAnimatedProps(() => ({
    cx: c2x.value,
    cy: c2y.value,
  }));

  return (
    <HyperComponent backgroundColor={theme.colors.background}>
      <Header title="Bezier" />
      <View style={styles.container}>
        <View style={styles.content}>
          <Svg style={StyleSheet.absoluteFill}>
            <AnimatedPath
              fill="transparent"
              stroke={theme.colors.components}
              strokeWidth={STROKE_WIDTH}
              animatedProps={path}
            />
            <AnimatedLine
              x1={start.x}
              y1={start.y}
              animatedProps={line1}
              stroke={theme.colors.components}
              strokeWidth={STROKE_WIDTH / 2}
            />
            <AnimatedLine
              x1={end.x}
              y1={end.y}
              animatedProps={line2}
              stroke={theme.colors.components}
              strokeWidth={STROKE_WIDTH / 2}
            />
            <AnimatedCircle
              animatedProps={circle1}
              fill={theme.colors.text}
              stroke={theme.colors.components}
              strokeWidth={STROKE_WIDTH}
              r={CONTROL_POINT_RADIUS}
            />
            <AnimatedCircle
              animatedProps={circle2}
              fill={theme.colors.text}
              stroke={theme.colors.components}
              strokeWidth={STROKE_WIDTH}
              r={CONTROL_POINT_RADIUS}
            />
          </Svg>
          <ControlPoint x={c1x} y={c1y} min={min} max={max} />
          <ControlPoint x={c2x} y={c2y} min={min} max={max} />
        </View>
      </View>
    </HyperComponent>
  );
};

export default BezierCurves;
