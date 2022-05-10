import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';

import { Text, TouchableOpacity } from '@mobile/components';

import { Container, Input as StyledInput } from './styles';

export interface IInputProps extends TextInputProps {
  title: string;
  password?: boolean;
  errorMessage?: string;
  error?: boolean
}

const Input = (props: IInputProps) => {
  const { title, password, error } = props;
  const [focus, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);
  const handleShowPassword = () => setShowPassword(false);

  return (
    <Container>
      <Text {...{ text:title }} />
      <StyledInput
        {...props}
        showBorder={focus}
        onFocus={handleFocus}
        onBlur={handleBlur}
        secureTextEntry={password && showPassword}
      />
      {showPassword && (
        <TouchableOpacity onPress={handleShowPassword}>
          {/* <Icon
            name={showPassword ? 'eye' : 'eye-with-line'}
            color="#000"
            size={16}
          /> */}
        </TouchableOpacity>
      )}
      {error && (
        <Text {...{ text: 'required field' }} />
      )}
    </Container>
  );
};

export default Input;
