import React, { useRef } from 'react';
import { View, FlatList } from 'react-native';

import useDimensions from '@mobile/hooks/useDimensions';

// import { Container } from './styles';

const ScrollToIndex = () => {
  const ref = useRef<FlatList>(null);
  const { width, height } = useDimensions();

  return <View />;
};

export default ScrollToIndex;
