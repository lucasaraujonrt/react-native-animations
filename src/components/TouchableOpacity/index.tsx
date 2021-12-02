import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Touch } from './styles';

interface ITouchableOpacityProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

const TouchableOpacity = (props: ITouchableOpacityProps) => (
  <Touch {...props} activeOpacity={0.7}>
    {props.children}
  </Touch>
);

export default TouchableOpacity;
