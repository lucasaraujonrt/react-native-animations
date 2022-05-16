import { MotiView } from 'moti';
import styled from 'styled-components/native';

import Me from '@mobile/assets/svg/aboutMe/ic_me.svg';
import * as Window from '@mobile/services/dimensions';

export const Container = styled.View``;

export const WrapperMe = styled(MotiView)`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: ${Window.heightScale(0.01)}px;
`;

export const IconMe = styled(Me)``;
