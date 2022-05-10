import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
// eslint-disable-next-line max-len
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, withSequence, Easing } from 'react-native-reanimated';

import { Input } from '@mobile/components';

import { IInputProps } from '../Input';

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#000000',
    width: 300,
    height: 300,
    borderRadius: 50,
  },
});

interface IShakeComponentProps extends IInputProps{

}

const ShakeComponent = (props: IShakeComponentProps) => {
  const { error } = props;
  const rotation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotation.value}deg` }],
  }));

  useEffect(() => {
    if (error) {
      rotation.value = withSequence(
        withTiming(-10, { duration: 50 }),
        withRepeat(withTiming(5, { duration: 100, easing: Easing.linear }), 5, true),
        withTiming(0, { duration: 50 }),
      );
    }
  }, [error, rotation]);

  return (
    <>
      <Animated.View style={animatedStyle}>
        <Input {...props} />
      </Animated.View>
    </>
  );
};

export default ShakeComponent;