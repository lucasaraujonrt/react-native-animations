import React from 'react';

import * as S from './Button.styles';

interface IButton {
  width?: number;
  title: string;
  loading?: boolean;
  disabled: boolean;
  icon?: React.ReactNode;
  onPress: () => void;
  testID?: string;
}

const Button = ({
  width,
  title,
  loading,
  icon,
  disabled,
  onPress,
  testID,
}: IButton) => (
  <S.Container>
    <S.Button
      onPress={onPress}
      width={width}
      disabled={disabled}
      testID={testID}
    >
      <S.Text>{title}</S.Text>
      {icon && null}
      {loading && <S.Loading animating={loading} />}
    </S.Button>
  </S.Container>
  );

export default Button;
