import * as shape from 'd3-shape';
import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import {
  interpolate,
  Extrapolate,
  useSharedValue,
  useDerivedValue,
} from 'react-native-reanimated';
import Svg, { Path, Defs, Stop, LinearGradient } from 'react-native-svg';

import { getPointAtLength, parsePath } from '@mobile/animation/helpers/SVG';
import { Cursor, Header, HyperComponent, Label } from '@mobile/components';
import theme from '@mobile/theme';

const { width } = Dimensions.get('window');
const height = width;
const data: Array<[number, number]> = [
  { x: new Date(2022, 5, 1), y: 4371 },
  { x: new Date(2022, 5, 2), y: 6198 },
  { x: new Date(2022, 5, 3), y: 5310 },
  { x: new Date(2022, 5, 4), y: 7188 },
  { x: new Date(2022, 5, 5), y: 8677 },
  { x: new Date(2022, 5, 6), y: 5012 },
].map((p) => [p.x.getTime(), p.y]);

const domain = {
  x: [Math.min(...data.map(([x]) => x)), Math.max(...data.map(([x]) => x))],
  y: [Math.min(...data.map(([, y]) => y)), Math.max(...data.map(([, y]) => y))],
};

const range = {
  x: [0, width],
  y: [height, 0],
};

const scale = (v: number, d: number[], r: number[]) => {
  'worklet';

  return interpolate(v, d, r, Extrapolate.CLAMP);
};

const scaleInvert = (y: number, d: number[], r: number[]) => {
  'worklet';

  return interpolate(y, r, d, Extrapolate.CLAMP);
};

const d = shape
  .line()
  .x(([x]) => scale(x, domain.x, range.x))
  .y(([, y]) => scale(y, domain.y, range.y))
  .curve(shape.curveBasis)(data) as string;
const path = parsePath(d);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
});

const Graph = () => {
  const length = useSharedValue(0);
  const point = useDerivedValue(() => {
    const coord = getPointAtLength(path, length.value);

    return {
      coord,
      data: {
        x: scaleInvert(coord.x, domain.x, range.x),
        y: scaleInvert(coord.y, domain.y, range.y),
      },
    };
  });

  return (
    <View style={styles.container}>
      <View style={[StyleSheet.absoluteFillObject, { top: 50 }]}>
        <Header title="Graph" />
      </View>
      <Label {...{ data, point }} />
      <View>
        <Svg {...{ width, height }}>
          <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gradient">
              <Stop stopColor={theme.colors.components} offset="0%" />
              <Stop stopColor={theme.colors.components} offset="80%" />
              <Stop stopColor={theme.colors.components} offset="100%" />
            </LinearGradient>
          </Defs>
          <Path
            fill="transparent"
            stroke={theme.colors.components}
            strokeWidth={5}
            {...{ d }}
          />
          <Path
            d={`${d}  L ${width} ${height} L 0 ${height}`}
            fill="url(#gradient)"
          />
        </Svg>
        <Cursor {...{ path, length, point }} />
      </View>
    </View>
  );
};

export default Graph;
