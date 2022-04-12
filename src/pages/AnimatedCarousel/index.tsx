import React, { useRef } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Animated,
  StatusBar,
} from 'react-native';
import {
  State,
  PinchGestureHandler,
  GestureEvent,
} from 'react-native-gesture-handler';

import Mock from '@mobile/mock/animatedImageCarousel';

const AnimatedCarousel = () => {
  const { width } = Dimensions.get('window');
  const scale = useRef(new Animated.Value(1)).current;
  const imageW = width * 0.7;
  const imageH = imageW * 1.54;
  const scrollX = useRef(new Animated.Value(0)).current;

  const onPinchEvent = Animated.event(
    [
      {
        nativeEvent: { scale },
      },
    ],
    {
      useNativeDriver: true,
    }
  );

  const onPinchStateChange = (event: GestureEvent) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <>
      <StatusBar hidden />
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <View style={StyleSheet.absoluteFillObject}>
          {Mock.data.map((item, index) => {
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ];

            const opacity: number = scrollX.interpolate({
              inputRange,
              outputRange: [0, 1, 0],
            });

            return (
              <Animated.Image
                key={`image-${index.toString()}`}
                style={[StyleSheet.absoluteFillObject, { opacity }]}
                source={{ uri: item }}
                blurRadius={50}
              />
            );
          })}
        </View>
        <Animated.FlatList
          data={Mock.data}
          horizontal
          pagingEnabled
          pinchGestureEnabled={false}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          keyExtractor={(_, item) => item.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                width,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 5,
              }}
            >
              <PinchGestureHandler
                onGestureEvent={onPinchEvent}
                onHandlerStateChange={onPinchStateChange}
              >
                <Animated.Image
                  source={{ uri: item }}
                  style={{
                    width: imageW,
                    height: imageH,
                    resizeMode: 'cover',
                    borderRadius: 10,
                    transform: [{ scale }],
                    position: 'absolute',
                  }}
                />
              </PinchGestureHandler>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default AnimatedCarousel;
