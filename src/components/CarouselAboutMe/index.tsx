import React from 'react';
import { View } from 'react-native';

interface Data {
  id: number;
  title: string;
  icon: React.ReactNode;
}

interface ICarouselAboutMeProps {
  data: Data[];
  selected: Data;
}
// todo carousel and return the selected item

const CarouselAboutMe = ({ data, selected }: ICarouselAboutMeProps) => <View />;

export default CarouselAboutMe;
