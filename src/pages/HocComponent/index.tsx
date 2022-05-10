import React from 'react';
import { Text, View } from 'react-native';

import { HyperComponent } from '@mobile/components';

const HocComponent: React.FC = () => {
  const backgroundColor = '#F2F2F2';

  return (
    <HyperComponent {... { backgroundColor }}>
      <View>
        <Text>hello </Text>
      </View>
    </HyperComponent>
  );

};

export default HocComponent;