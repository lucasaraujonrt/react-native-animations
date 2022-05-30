import styled from 'styled-components/native';

import * as Window from '@mobile/services/dimensions';

export const Map = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

export const WrapperIcon = styled.View`
  border-color: ${({ theme }) => theme.colors.components};
  border-width: 2px;
  border-radius: 8px;
  padding: 10px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${Window.fontScale(16)}px;
  margin-top: 12px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
`;
