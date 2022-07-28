import React from 'react';
import { View, Text, Image } from 'react-native';
import Animated, {
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { Header, HyperComponent } from '@mobile/components';
import theme from '@mobile/theme';

const HEIGHT = 380;
const WIDTH = 230;

const Sensor = () => {
  const animatedSensor = useAnimatedSensor(SensorType.ROTATION, {
    interval: 100,
  });

  const style = useAnimatedStyle(() => {
    const { pitch, yaw } = animatedSensor.sensor.value;
    const yawValue =
      30 * (yaw < 0 ? 2.5 * Number(yaw.toFixed(2)) : Number(yaw.toFixed(2)));
    const pitchValue = 36 * pitch.toFixed(2);

    return {
      // width: pitchValue,
      // height: yawValue,
      transform: [{ translateX: pitchValue }, { translateY: yawValue }],
    };
  });

  return (
    <HyperComponent backgroundColor={theme.colors.background}>
      <Header title="Sensor" />
      <Animated.View
        style={[
          {
            width: WIDTH + 20,
            height: HEIGHT + 20,
            overflow: 'hidden',
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            top: HEIGHT - WIDTH,
          },
          style,
        ]}
      >
        <Image
          style={{ width: WIDTH, height: HEIGHT }}
          source={require('../../animation/Cards/assets/horizontal/horizontal_1.png')}
        />
      </Animated.View>
    </HyperComponent>
  );
};
export default Sensor;
