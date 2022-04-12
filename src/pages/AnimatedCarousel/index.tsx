import React, { useRef } from 'react';
import {
  View,
  Dimensions,
  Image,
  StyleSheet,
  Animated,
  StatusBar,
} from 'react-native';

import Mock from '@mobile/mock/animatedImageCarousel';

const AnimatedCarousel = () => {
  const { width } = Dimensions.get('window');
  const imageW = width * 0.7;
  const imageH = imageW * 1.54;
  const scrollX = useRef(new Animated.Value(0)).current;

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
              <Image
                source={{ uri: item }}
                style={{
                  width: imageW,
                  height: imageH,
                  resizeMode: 'cover',
                  borderRadius: 10,
                }}
              />
            </View>
          )}
        />
      </View>
    </>
  );
};

export default AnimatedCarousel;
