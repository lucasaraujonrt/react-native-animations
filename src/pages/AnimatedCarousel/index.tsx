import React, { useRef } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Animated,
  StatusBar,
  Image,
} from 'react-native';
import {
  State,
  PinchGestureHandler,
  GestureEvent,
} from 'react-native-gesture-handler';

import image1 from '@mobile/animation/Cards/assets/horizontal/horizontal_1.png';
import image2 from '@mobile/animation/Cards/assets/horizontal/horizontal_2.png';
import image3 from '@mobile/animation/Cards/assets/horizontal/horizontal_3.png';
import image4 from '@mobile/animation/Cards/assets/horizontal/horizontal_4.png';

const mock = [
  {
    image: Image.resolveAssetSource(image1).uri,
  },
  {
    image: Image.resolveAssetSource(image2).uri,
  },
  {
    image: Image.resolveAssetSource(image3).uri,
  },
  {
    image: Image.resolveAssetSource(image4).uri,
  },
];

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
          {mock.map((item, index) => {
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
                source={{ uri: item.image }}
                blurRadius={50}
              />
            );
          })}
        </View>
        <Animated.FlatList
          data={mock}
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
                  source={{ uri: item.image }}
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
