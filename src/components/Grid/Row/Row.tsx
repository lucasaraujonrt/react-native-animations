import React from 'react';
import * as S from './Row.styles';

interface IRow {
  children: React.ReactNode;
  pdTop?: number;
  pdBottom?: number;
  pdLeft?: number;
  pdRight?: number;
  alignSelf?: string;
  justifyContent?: string;
  alignItems?: string;
}

const Row = ({
  children,
  pdBottom,
  pdLeft,
  pdRight,
  pdTop,
  alignSelf,
  alignItems,
  justifyContent,
}: IRow) => {
  return (
    <S.Row
      alignSelf={alignSelf}
      alignItems={alignItems}
      justifyContent={justifyContent}
      pdTop={pdTop}
      pdBottom={pdBottom}
      pdLeft={pdLeft}
      pdRight={pdRight}
    >
      {children}
    </S.Row>
  );
};

export default Row;
