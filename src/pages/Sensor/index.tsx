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
    console.log(animatedSensor.sensor.value);
    const yaw = Math.abs(animatedSensor.sensor.value.yaw) * 200 + 20;
    const pitch = Math.abs(animatedSensor.sensor.value.pitch) * 200 + 20;

    console.log('yaw', yaw);
    console.log('pitch', pitch);

    return {
      height: withTiming(yaw, { duration: 100 }), // <- usage
      width: withTiming(pitch, { duration: 100 }),
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
        <Animated.View style={[{ backgroundColor: 'blue' }, style]} />
      </View>
    </HyperComponent>
  );
};
export default Sensor;
