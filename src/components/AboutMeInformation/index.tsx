import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

interface IAboutMeInformationProps {
  currentIndex: number;
}

// todo get the current Index and return the information animated

const AboutMeInformation = ({ currentIndex }: IAboutMeInformationProps) => (
  <View key={currentIndex} />
);

export default AboutMeInformation;
