import styled from 'styled-components/native';

import Me from '@mobile/assets/svg/home/ic_me_hello.svg';

export const WrapperImage = styled.View`
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
`;

export const MeIcon = styled(Me)`
  left: 20px;
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
  width: 80%;
  justify-content: space-around;
  align-items: center;
  align-self: center;
`;

export const Squares = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 125px;
  height: 125px;
  background-color: ${({ theme }) => theme.colors.components};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const SquareText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 22px;
  text-align: center;
  width: 60%;
`;
