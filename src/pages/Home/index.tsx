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
    name: 'Pan Gesture  💅 ',
    navigate: 'PanGesture',
  },
  {
    name: 'Transitions  💅 ',
    navigate: 'PanGesture',
  },
  {
    name: 'SquareStick  💅 ',
    navigate: 'SquareStick',
  },
  {
    name: 'Pan Gesture  💅 ',
    navigate: 'PanGesture',
  },
];

const Home: React.FC = () => {
  const { width } = useDimensions();

  return (
    <Background barStyle="dark-content" backgroundColor="white">
      <FlatList
        data={AnimationList}
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
                borderBottomWidth: 0.2,
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
