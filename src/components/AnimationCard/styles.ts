import styled from 'styled-components/native';

import * as Window from '@mobile/services/dimensions';

interface IProps {
  disabled?: boolean;
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 80%;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.card};
  flex-direction: row;
  padding-vertical: 15px;
  margin-vertical: 10px;
  border-radius: 8px;
  ${({ disabled }: IProps) => disabled && 'opacity: 0.5'}
  justify-content: space-around;
`;

export const Wrapper = styled.View`
  width: 60%;
  flex-direction: row;
`;

export const WrapperIcon = styled.View`
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;

export const WrapperText = styled.View`
  /* background-color: blue; */
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${Window.fontScale(16)}px;
`;

export const WrapperType = styled.View`
  background-color: ${({ theme }) => theme.colors.components};
  justify-content: center;
  align-items: center;
  padding: 2%;
  border-radius: 8px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Type = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${Window.fontScale(12)}px;
`;
