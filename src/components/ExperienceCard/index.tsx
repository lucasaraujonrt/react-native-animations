import React from 'react';

import { ExperienceProps } from '@mobile/views/Experience';

import * as S from './styles';

const ExperienceCard = ({ name, type, year }: ExperienceProps) => {
  const getCurrentColor = (tech: string) => {
    switch (tech) {
      case 'mobile':
        return '#2CB67D';
      case 'web':
        return '#7F5AF0';
      case 'devops':
        return '#F25F4C';
      default:
        break;
    }

    return '';
  };

  return (
    <S.Container>
      <S.WrapperRow>
        <S.Project>{name}</S.Project>
        <S.Wrapper>
          {type.map((item) => (
            <S.WrapperType style={{ backgroundColor: getCurrentColor(item) }}>
              <S.Type>{item}</S.Type>
            </S.WrapperType>
          ))}
        </S.Wrapper>
      </S.WrapperRow>
      <S.Date>{year}</S.Date>
    </S.Container>
  );
};

export default ExperienceCard;
