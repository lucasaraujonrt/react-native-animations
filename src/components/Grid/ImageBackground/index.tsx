import React from 'react';
import { ImageProps } from 'react-native';

import { Container } from './styles';

interface IImageBackgroundProps extends ImageProps {
  children: React.ReactNode;
}

const ImageBackground = (props: IImageBackgroundProps) => {
  return <Container {...props}>{props.children}</Container>;
};

export default ImageBackground;
