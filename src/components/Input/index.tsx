import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Text, TouchableOpacity } from '@mobile/components';
import { Container, Input as StyledInput } from './styles';

interface IInputProps extends TextInputProps {
  title: string;
  password?: boolean;
}

const Input = (props: IInputProps) => {
  const [focus, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);
  const handleShowPassword = () => setShowPassword(false);

  return (
    <Container>
      <Text text={props.title} />
      <StyledInput
        {...props}
        showBorder={focus}
        onFocus={handleFocus}
        onBlur={handleBlur}
        secureTextEntry={props.password && showPassword}
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
    </Container>
  );
};

export default Input;
