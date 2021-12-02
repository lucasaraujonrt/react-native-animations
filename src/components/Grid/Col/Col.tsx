import React from 'react';
import * as S from './Col.styles';

interface ICol {
  children: React.ReactNode;
  pdTop?: number;
  pdBottom?: number;
  pdLeft?: number;
  pdRight?: number;
}

const Col = ({ children, pdBottom, pdLeft, pdRight, pdTop }: ICol) => {
  return (
    <S.Col pdTop={pdTop} pdBottom={pdBottom} pdLeft={pdLeft} pdRight={pdRight}>
      {children}
    </S.Col>
  );
};

export default Col;
