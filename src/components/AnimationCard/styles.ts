import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import * as Window from '@mobile/services/dimensions';
import theme from '@mobile/theme';

interface IProps {
  disabled?: boolean;
}

export const Container = styled(RectButton).attrs({
  activeOpacity: 0.7,
  underlayColor: theme.colors.background,
})`
  width: 80%;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.card};
  flex-direction: row;
  padding-vertical: 15px;
  margin-vertical: 10px;
  border-radius: 8px;
  ${({ disabled }: IProps) => disabled && 'opacity: 0.5'};
`;

export const Wrapper = styled.View`
  flex-direction: row;
  width: 70%;
`;

export const WrapperIcon = styled.View`
  justify-content: center;
  align-items: center;
  width: ${Window.widthScale(0.1)}px;
  margin-horizontal: ${Window.widthScale(0.01)}px;
`;

export const WrapperText = styled.View`
  align-self: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${Window.fontScale(16)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
`;

export const WrapperType = styled.View`
  background-color: ${({ theme }) => theme.colors.components};
  justify-content: center;
  align-items: center;
  padding: ${Window.widthScale(0.01)}px;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
`;

export const SecondWrapper = styled.View`
  width: 25%;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Type = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${Window.fontScale(12)}px;
`;
