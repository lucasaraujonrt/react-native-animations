import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { useDerivedValue } from 'react-native-reanimated';
import { ReText, round } from 'react-native-redash';

import theme from '@mobile/theme';

const styles = StyleSheet.create({
  date: {
    fontSize: 22,
    lineHeight: 26,
    textAlign: 'center',
    color: theme.colors.text,
  },
  price: {
    fontSize: 28,
    lineHeight: 34,
    textAlign: 'center',
    color: theme.colors.text,
  },
});

export interface DataPoint {
  coord: {
    x: number;
    y: number;
  };
  data: {
    x: number;
    y: number;
  };
}

interface LabelProps {
  point: Animated.SharedValue<DataPoint>;
}

const Label = ({ point }: LabelProps) => {
  const date = useDerivedValue(() => {
    const d = new Date(point.value.data.x);

    return d.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  });

  const price = useDerivedValue(
    () =>
      `R$ ${round(point.value.data.y, 2).toLocaleString('pt-BR', {
        currency: 'BRL',
      })}`
  );

  return (
    <View>
      <ReText style={styles.date} text={date} />
      <ReText style={styles.price} text={price} />
    </View>
  );
};

export default Label;
