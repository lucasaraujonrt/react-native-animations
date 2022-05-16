import { MotiView } from 'moti';
import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { Easing } from 'react-native-reanimated';

import { Background, HyperComponent } from '@mobile/components';
import useDimensions from '@mobile/hooks/useDimensions';
import navigationService from '@mobile/services/navigation';
import theme from '@mobile/theme';

interface IAnimationList {
  name: string;
  navigate: string;
}

const AnimationList: IAnimationList[] = [
  {
    name: 'Pan Gesture (Reanimated v2)  💅 ',
    navigate: 'PanGesture',
  },
  {
    name: 'Someone is Calling (Moti)  💅 ',
    navigate: 'PhoneCall',
  },
  {
    name: 'SquareStick (Reanimated v2)  💅 ',
    navigate: 'SquareStick',
  },
  {
    name: 'Simple Carousel (Animated API)  💅 ',
    navigate: 'AnimatedCarousel',
  },
  {
    name: 'MindBlow (Animated API)  💅 ',
    navigate: 'MindBlow',
  },
  {
    name: 'Graph (Reanimated v2)  💅 ',
    navigate: 'Graph',
  },
];

const Home = () => {
  const { width } = useDimensions();
  const getDirection = (index: number) =>
    index % 2 ? 'translateX' : 'translateY';

  return (
    <HyperComponent backgroundColor={theme?.colors?.background}>
      <FlatList
        data={AnimationList}
        style={{ flexGrow: 1 }}
        renderItem={({ item, index }) => (
          <MotiView
            delay={600 * index}
            from={{
              opacity: 0,
              scale: 0.5,
              [getDirection(index)]: -20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              [getDirection(index)]: 0,
            }}
            transition={{
              type: 'spring',
              duration: 3500,
              scale: {
                delay: 50,
              },
              easing: Easing.out(Easing.bounce),
            }}
          >
            <TouchableOpacity
              onPress={() => navigationService.navigate(item.navigate)}
              key={index.toString()}
            >
              <View
                style={{
                  width,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 20,
                  borderBottomWidth:
                    AnimationList.length === index - 1 ? 0 : 0.2,
                  borderBottomColor: theme.colors.text,
                }}
              >
                <Text style={{ color: theme.colors.text, fontWeight: '600' }}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          </MotiView>
        )}
      />
    </HyperComponent>
  );
};

export default Home;
