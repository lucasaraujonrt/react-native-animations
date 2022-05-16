import styled from 'styled-components/native';

import Icon from '@mobile/assets/svg/components/ic_header_arrow.svg';
import * as Window from '@mobile/services/dimensions';

export const Container = styled.View`
  width: 95%;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  align-self: center;
`;

export const WrapperArrow = styled.TouchableOpacity`
  padding-vertical: ${Window.heightScale(0.03)}px;
  margin-right: ${Window.widthScale(0.01)}px;
`;

export const Arrow = styled(Icon)``;

export const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
`;
