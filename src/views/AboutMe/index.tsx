import { MotiView } from 'moti';
import React from 'react';

import Contact from '@mobile/assets/svg/components/aboutme/ic_contact.svg';
import Experience from '@mobile/assets/svg/components/aboutme/ic_experience.svg';
import { HyperComponent, Header, CarouselAboutMe } from '@mobile/components';
import theme from '@mobile/theme';

import * as S from './style';

const AboutMe: React.FC = () => {
  const data = [
    {
      id: 2,
      title: 'Experience',
      icon: <Experience />,
      disabled: false,
      navigateTo: 'Experience',
    },
    {
      id: 3,
      title: 'Contact',
      icon: <Contact />,
      disabled: false,
      navigateTo: 'Contact',
    },
  ];

  return (
    <HyperComponent backgroundColor={theme.colors.primary}>
      <Header title="About Me" />
      <S.WrapperMe
        delay={500}
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
      <MotiView
        style={{
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <CarouselAboutMe {...{ data }} />
      </MotiView>
    </HyperComponent>
  );
};

export default AboutMe;
