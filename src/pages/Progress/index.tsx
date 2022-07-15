import React, { useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

import { Header, HyperComponent } from '@mobile/components';
import theme from '@mobile/theme';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedText = Animated.createAnimatedComponent(TextInput);

const radius = 45;
const circumference = radius * Math.PI * 2;
const duration = 1000;

const Progress: React.FC = () => {
  const strokeOffset = useSharedValue(circumference);

  const percentage = useDerivedValue(() => {
    const number = ((circumference - strokeOffset.value) / circumference) * 100;

    return withTiming(number, { duration });
  });

  const strokeColor = useDerivedValue(() =>
    interpolateColor(
      percentage.value,
      [0, 50, 100],
      ['rgb(150, 119, 200)', 'rgb(150, 119, 230)', 'rgb(150, 119, 244)']
    )
  );

  const animatedCircleProps = useAnimatedProps(() => ({
    strokeDashoffset: withTiming(strokeOffset.value, { duration }),
    stroke: strokeColor.value,
  }));

  const animatedTextProps = useAnimatedProps(() => ({
    text: `${Math.round(percentage.value)}%`,
  }));

  useEffect(() => {
    // ;
  }, []);

  const action = () => {
    if (strokeOffset.value === 0) {
      strokeOffset.value = circumference;
    } else {
      strokeOffset.value = 0;
    }

    return null;
  };

  return (
    <HyperComponent backgroundColor={theme.colors.background}>
      <Header title="Progress" />
      <RectButton
        onPress={action}
        style={{
          backgroundColor: theme.colors.components,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
          width: '60%',
          alignSelf: 'center',
          borderRadius: 20,
        }}
      >
        <Text style={{ color: 'white', fontSize: 24 }}>Start</Text>
      </RectButton>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <AnimatedText
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
            position: 'absolute',
          }}
          animatedProps={animatedTextProps}
        />
        <Svg height="50%" width="50%" viewBox="0 0 100 100">
          <AnimatedCircle
            animatedProps={animatedCircleProps}
            cx="50"
            cy="50"
            r="45"
            strokeWidth="5"
            fill="rgba(255,255,255,0.1)"
            strokeDasharray={`${radius * Math.PI * 2}`}
          />
        </Svg>
      </View>
    </HyperComponent>
  );
};

export default Progress;
