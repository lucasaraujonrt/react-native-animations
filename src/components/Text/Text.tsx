import React from 'react';
import * as S from './Text.styles';

interface IText {
  text: string;
  textColor?: string;
  textSize?: number;
}

const Text = ({ text, textColor, textSize }: IText) => {
  return (
    <S.Text textColor={textColor} textSize={textSize}>
      {text}
    </S.Text>
  );
};

export default Text;
