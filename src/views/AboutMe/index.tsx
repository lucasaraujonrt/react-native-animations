import React from 'react';
import { Text } from 'react-native';

import { HyperComponent } from '@mobile/components';
import theme from '@mobile/theme';

const AboutMe: React.FC = () => (
  <HyperComponent
    backgroundColor={theme.colors.primary}
    style={{ alignItems: 'center', justifyContent: 'center' }}
  >
    <Text style={{ fontSize: 40, color: 'white' }}>About me </Text>
  </HyperComponent>
);

export default AboutMe;
