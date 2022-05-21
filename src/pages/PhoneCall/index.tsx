import { MotiView } from 'moti';
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Easing } from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';

import { Header, HyperComponent } from '@mobile/components';
import { PhoneCall as CNST } from '@mobile/constants';
import theme from '@mobile/theme';

const styles = StyleSheet.create({
  dot: {
    width: CNST.SIZE,
    height: CNST.SIZE,
    borderRadius: CNST.SIZE,
    backgroundColor: theme.colors.components,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const PhoneCall: React.FC = () => {
  const [call, setCall] = useState(true);

  return (
    <HyperComponent
      backgroundColor={theme.colors.primary}
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
        },
        StyleSheet.absoluteFillObject,
      ]}
    >
      <View style={[StyleSheet.absoluteFillObject, { top: 40 }]}>
        <Header title="Someone is calling" />
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.dot, styles.center]}
        onPress={() => {
          setCall((prevState) => !prevState);
        }}
      >
        {call && (
          <>
            {[...Array(3).keys()].map((index) => (
              <MotiView
                from={{ opacity: 0.5, scale: 1 }}
                animate={{ opacity: 0, scale: 4 }}
                transition={{
                  type: 'timing',
                  duration: 2000,
                  easing: Easing.out(Easing.ease),
                  loop: true,
                  delay: index * 400,
                  repeatReverse: false,
                }}
                style={[StyleSheet.absoluteFillObject, styles.dot]}
                key={index}
              />
            ))}
          </>
        )}
        <Feather name="phone-call" size={32} color="white" />
      </TouchableOpacity>
    </HyperComponent>
  );
};

export default PhoneCall;
