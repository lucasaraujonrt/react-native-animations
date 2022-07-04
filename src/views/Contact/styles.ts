import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import IconMe from '@mobile/assets/svg/components/contact/ic_me.svg';
import * as Window from '@mobile/services/dimensions';
import theme from '@mobile/theme';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: 80%;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Circle = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 146px;
  height: 146px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.components};
`;

export const Me = styled(IconMe)``;

export const WrapperIcons = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${({ theme }) => theme.colors.card};
  width: 60px;
  height: 60px;
  margin-horizontal: 30px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

export const Top = styled.View`
  top: 70px;
`;

export const Bottom = styled.View`
  bottom: 70px;
`;

export const Float = styled.View`
  position: absolute;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  top: auto;
  bottom: ${Window.heightScale(0.03)}px;
`;

export const TextFloat = styled.Text`
  font-size: ${Window.fontScale(16)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Pressable = styled.Pressable.attrs({
  activeOpacity: 0.7,
})`
  margin-left: 5px;
`;

export const MyLove = styled.Text`
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.text};
  font-size: ${Window.fontScale(16)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};
`;
