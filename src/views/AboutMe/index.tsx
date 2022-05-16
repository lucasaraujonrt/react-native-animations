import React from 'react';

import {
  HyperComponent,
  Header,
  CarouselAboutMe,
  AboutMeInformation,
} from '@mobile/components';
import theme from '@mobile/theme';

import * as S from './style';

const AboutMe: React.FC = () => (
  <HyperComponent backgroundColor={theme.colors.primary}>
    <Header title="About Me" />
    <S.WrapperMe
      delay={1000}
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
    >
      <S.IconMe />
    </S.WrapperMe>
    <CarouselAboutMe />
    <AboutMeInformation />
  </HyperComponent>
);

export default AboutMe;
