import { MotiView } from 'moti';
import React from 'react';
import { SectionList, Text, View } from 'react-native';
import { Easing } from 'react-native-reanimated';

import { getDirection } from '@mobile/animation/helpers/directions';
import {
  AnimationList,
  ExperienceCard,
  Header,
  HyperComponent,
} from '@mobile/components';
import theme from '@mobile/theme';

import * as S from './styles';

export interface ExperienceProps {
  name: string;
  year: string;
  type: string[];
}

export interface SectionListExperience {
  date: string;
  company: string;
  data: ExperienceProps[];
}

const experience: SectionListExperience[] = [
  {
    company: 'CI&T 🌎',
    date: '2022 • Present',
    data: [
      {
        name: 'Johnson & Johnson',
        year: '2022',
        type: ['web'],
      },
    ],
  },
  {
    date: '2020 • 2022',
    company: 'MB Labs 🇧🇷',
    data: [
      {
        name: 'Auto Avaliar',
        year: '2020',
        type: ['web'],
      },
      {
        name: 'Escola Mais',
        year: '2020',
        type: ['mobile'],
      },
      {
        name: 'Pier Serv',
        year: '2020 • 2021',
        type: ['mobile'],
      },
      {
        name: 'Be all bee',
        year: '2021',
        type: ['mobile', 'web'],
      },
      {
        name: 'Luppi',
        year: '2021',
        type: ['mobile'],
      },
      {
        name: "The Men's ",
        year: '2021',
        type: ['web'],
      },
      {
        name: 'Hypnobox ',
        year: '2021 • 2022',
        type: ['mobile'],
      },
      {
        name: 'Bankeiro ',
        year: '2021',
        type: ['devops'],
      },
      {
        name: 'Modal Mais ',
        year: '2021 • 2022',
        type: ['mobile'],
      },
    ],
  },
];

const Experience = () => {
  const title = 'Experience';

  return (
    <HyperComponent backgroundColor={theme.colors.background}>
      <Header {...{ title }} />
      <SectionList
        sections={experience}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        keyExtractor={(_, index) => index.toString()}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section }) => (
          <MotiView
            from={{
              opacity: 0,
              scale: 0.5,
              translateX: -10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              translateX: 0,
            }}
            transition={{
              type: 'spring',
              duration: 3500,
              scale: {
                delay: 50,
              },
              easing: Easing.out(Easing.bounce),
            }}
          >
            <S.ContainerSection>
              <S.Company>{section.company}</S.Company>
              <S.DateAtCompany>{section.date}</S.DateAtCompany>
            </S.ContainerSection>
          </MotiView>
        )}
        SectionSeparatorComponent={() => <S.SectionSeparatorComponent />}
        renderItem={({ item, index }) => (
          <S.ContainerSection>
            <AnimationList {...{ index }}>
              <ExperienceCard {...item} />
            </AnimationList>
          </S.ContainerSection>
        )}
      />
    </HyperComponent>
  );
};

export default Experience;
