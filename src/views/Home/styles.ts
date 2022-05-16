import styled from 'styled-components/native';

import Arrow from '@mobile/assets/svg/home/ic-arrow-right.svg';
import Me from '@mobile/assets/svg/home/ic-home-img.svg';
import * as Window from '@mobile/services/dimensions';

interface IProps {
  direction?: 'row' | 'row-reverse';
  directionText?: 'right' | 'left';
  directionArrow?: 'right' | 'left';
}

export const WrapperImage = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const MeIcon = styled(Me).attrs({
  height: Window.heightScale(0.45),
})`
  top: ${Window.heightScale(0.1)}px;
`;

export const WrapperInformation = styled.View`
  width: 90%;
  align-self: center;
`;

export const WrapperTexts = styled.View`
  margin-top: 40px;
`;

export const FirstText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 40px;
`;

export const SecondText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 40px;
`;

export const WorkText = styled.Text`
  color: ${({ theme }) => theme.colors.paragraph};
  font-size: 20px;
  margin-top: 20px;
`;

export const WrapperSquares = styled.View`
  margin-top: 20px;
  flex-direction: row;
  width: 90%;
  justify-content: space-around;
  align-items: center;
  align-self: center;
`;

export const Squares = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 160px;
  height: 102px;
  flex-direction: ${({ direction }: IProps) =>
    direction ? 'row' : 'row-reverse'};
  background-color: ${({ theme }) => theme.colors.components};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const WrapperArrow = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.homePurple};
  justify-content: center;
  align-items: center;
`;

export const ArrowIcon = styled(Arrow)`
  ${({ directionArrow }: IProps) =>
    `transform: rotate(${directionArrow === 'left' ? '-180deg' : '0deg'}`})
`;

export const SquareText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 22px;
  text-align: ${({ directionText }: IProps) => directionText};
`;
