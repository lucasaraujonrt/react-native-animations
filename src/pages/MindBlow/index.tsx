import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Animated,
} from 'react-native';

import Me from '@mobile/assets/svg/aboutMe/ic_me.svg';
import { MindBlowConstants } from '@mobile/constants';

const Circle = ({ onPress, animatedValue }: any) => {
  const inputRange = [0, 0.001, 0.5, 0.501, 1];
  const backgroundColor = animatedValue.interpolate({
    inputRange,
    outputRange: [
      MindBlowConstants.RED,
      MindBlowConstants.RED,
      MindBlowConstants.RED,
      MindBlowConstants.BLUE,
      MindBlowConstants.BLUE,
    ],
  });

  const circleColor = animatedValue.interpolate({
    inputRange,
    outputRange: [
      MindBlowConstants.BLUE,
      MindBlowConstants.BLUE,
      MindBlowConstants.BLUE,
      MindBlowConstants.RED,
      MindBlowConstants.RED,
    ],
  });

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        styles.circleContainer,
        { backgroundColor },
      ]}
    >
      <TouchableOpacity onPress={onPress}>
        <Animated.View
          style={[
            styles.circle,
            {
              backgroundColor: circleColor,
              transform: [
                {
                  perspective: 400,
                },
                {
                  rotateY: animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: ['0deg', '-90deg', '-180deg'],
                  }),
                },
                {
                  scale: animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 7, 1],
                  }),
                },
                {
                  translateX: animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [0, 50, 0],
                  }),
                },
              ],
            },
          ]}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

const MindBlow: React.FC = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animation = (toValue: number) =>
    Animated.timing(animatedValue, {
      toValue,
      duration: 3000,
      useNativeDriver: false,
    });

  const [index, setIndex] = useState(0);

  const onPress = () => {
    setIndex(index === 1 ? 0 : 1);
    animation(index === 1 ? 0 : 1).start();
  };

  return (
    <View style={styles.container}>
      <Circle onPress={onPress} animatedValue={animatedValue} />
      <Me style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 350,
    height: 250,
    alignSelf: 'center',
    top: 100,
  },
  circleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 8,
    paddingBottom: 100,
    backgroundColor: MindBlowConstants.RED,
  },
  circle: {
    width: MindBlowConstants.CIRCLE_SIZE,
    height: MindBlowConstants.CIRCLE_SIZE,
    backgroundColor: MindBlowConstants.BLUE,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MindBlow;
