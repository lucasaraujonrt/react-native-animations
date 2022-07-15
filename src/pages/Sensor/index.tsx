import React from 'react';
import { View, Text } from 'react-native';
import Animated, {
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { Header, HyperComponent } from '@mobile/components';
import theme from '@mobile/theme';

// import { Container } from './styles';

const Sensor: React.FC = () => {
  const animatedSensor = useAnimatedSensor(SensorType.ROTATION, {
    interval: 10,
  });

  const style = useAnimatedStyle(() => {
    const qx = Math.abs(animatedSensor.sensor.value.qw as number);
    const qy = Math.abs(animatedSensor.sensor.value.qy as number);

    return {
      transform: [
        { translateX: withTiming(qx * 80, { duration: 100 }) },
        { translateY: withTiming(qy * 80, { duration: 100 }) },
      ],
      width: withTiming(qx * 80, { duration: 100 }),
    };
  });

  return (
    <HyperComponent backgroundColor={theme.colors.background}>
      <Header title="Sensor" />
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Animated.View
          style={[{ backgroundColor: 'blue', height: 200, width: 300 }, style]}
        />
      </View>
    </HyperComponent>
  );
};
export default Sensor;
