import styled from 'styled-components/native';

import * as Window from '@mobile/services/dimensions';

interface IProps {
  size: 'small' | 'large' | 'medium' | 'title';
  color?: string;
  font: 'bold' | 'medium' | 'regular';
  textAlign?: string;
}

const getCurrentFont = (font: string) => {
  switch (font) {
    case 'bold':
      return 'JetBrains Mono';
    case 'medium':
      return 'JetBrains Mono Medium';
    case 'regular':
      return 'JetBrains Mono';
    default:
      break;
  }

  return 'JetBrains Mono';
};

const getCurrentSize = (size: string) => {
  switch (size) {
    case 'small':
      return 12;
    case 'large':
      return 40;
    case 'medium':
      return 20;
    default:
      break;
  }

  return '';
};

// eslint-disable-next-line import/prefer-default-export
export const Text = styled.Text`
  font-family: ${({ font }) => getCurrentFont(font)};
  color: ${({ color }: IProps) => color};
  font-size: ${({ size }) =>
    `${Window.fontScale(Number(getCurrentSize(size)))}px`};
  text-align: ${({ textAlign }: IProps) => textAlign};
`;
