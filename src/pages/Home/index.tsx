import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';

import { Background } from '@mobile/components';
import useDimensions from '@mobile/hooks/useDimensions';
import navigationService from '@mobile/services/navigation';

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
    name: 'CI&T Calling (Moti)  💅 ',
    navigate: 'PhoneCall',
  },
  {
    name: 'SquareStick (Reanimated v2)  💅 ',
    navigate: 'SquareStick',
  },
  {
    name: 'Animated Carousel (Animated API)  💅 ',
    navigate: 'AnimatedCarousel',
  },
  {
    name: 'MindBlow (Animated API)  💅 ',
    navigate: 'MindBlow',
  },
  {
    name: 'HocComponent (Animated API)  💅 ',
    navigate: 'HocComponent',
  },
  {
    name: 'Shake (Reanimated v2)  💅 ',
    navigate: 'Shake',
  },
];

const Home = () => {
  const { width } = useDimensions();

  return (
    <Background barStyle="dark-content" backgroundColor="white">
      <FlatList
        data={AnimationList}
        style={{ flexGrow: 1 }}
        renderItem={({ item, index }) => (
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
                borderBottomWidth: AnimationList.length === index ? 0 : 0.2,
              }}
            >
              <Text style={{ color: 'black', fontWeight: '600' }}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </Background>
  );
};

export default Home;
