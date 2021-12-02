import styled from 'styled-components/native';
import * as Window from '@mobile/services/dimensions';

interface IProps {
  width?: number;
  loading?: boolean;
  disabled: boolean;
}

export const Container = styled.View``;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: ${({ width }: IProps) =>
    width ? Window.widthScale(width) : Window.widthScale(0.7)}px;
  padding-vertical: ${Window.heightScale(0.01)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: ${Window.normalizeScale(100)}px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  flex-direction: row;
`;

export const Text = styled.Text`
  font-size: ${Window.fontScale(15)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Loading = styled.ActivityIndicator`
  padding-left: ${Window.heightScale(0.01)}px;
`;
