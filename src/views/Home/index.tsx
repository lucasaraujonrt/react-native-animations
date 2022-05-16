import { MotiView } from 'moti';
import React from 'react';

import { HyperComponent } from '@mobile/components';
import i18n from '@mobile/i18n';
import navigationService from '@mobile/services/navigation';
import theme from '@mobile/theme';

import * as S from './styles';

const Home = () => {
  const navigateTo = (screen: string) => navigationService.navigate(screen);

  return (
    <HyperComponent backgroundColor={theme?.colors?.background}>
      <S.WrapperImage>
        <MotiView
          from={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
        >
          <S.MeIcon />
        </MotiView>
      </S.WrapperImage>
      <S.WrapperInformation>
        <S.WrapperTexts>
          <MotiView
            delay={1200}
            from={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{
              type: 'timing',
              duration: 350,
            }}
          >
            <S.FirstText>{i18n.t('VIEWS.HOME.CONTENT.HI')}</S.FirstText>
            <S.SecondText>{i18n.t('VIEWS.HOME.CONTENT.NAME')}</S.SecondText>
            <S.WorkText>{i18n.t('VIEWS.HOME.CONTENT.WORK')}</S.WorkText>
          </MotiView>
        </S.WrapperTexts>
      </S.WrapperInformation>
      <S.WrapperSquares>
        <MotiView
          delay={2000}
          from={{ opacity: 0, scale: 0.5, translateX: -20 }}
          animate={{ opacity: 1, scale: 1, translateX: 0 }}
          transition={{
            type: 'spring',
            duration: 3500,
            scale: {
              delay: 50,
            },
          }}
        >
          <S.Squares
            direction="row-reverse"
            onPress={() => navigateTo('AboutMe')}
          >
            <S.WrapperArrow>
              <S.ArrowIcon directionArrow="left" />
            </S.WrapperArrow>
            <S.SquareText directionText="right" style={{ width: '50%' }}>
              {i18n.t('VIEWS.HOME.BUTTONS.ABOUT_ME.TITLE')}
            </S.SquareText>
          </S.Squares>
        </MotiView>
        <MotiView
          delay={2000}
          from={{ opacity: 0, scale: 0.5, translateX: 20 }}
          animate={{ opacity: 1, scale: 1, translateX: 0 }}
          transition={{
            type: 'spring',
            duration: 3500,
            scale: {
              delay: 100,
            },
          }}
        >
          <S.Squares onPress={() => navigateTo('SandBox')}>
            <S.WrapperArrow>
              <S.ArrowIcon directionArrow="right" />
            </S.WrapperArrow>
            <S.SquareText directionText="left" style={{ width: '50%' }}>
              {i18n.t('VIEWS.HOME.BUTTONS.SANDBOX.TITLE')}
            </S.SquareText>
          </S.Squares>
        </MotiView>
      </S.WrapperSquares>
    </HyperComponent>
  );
};

export default Home;
