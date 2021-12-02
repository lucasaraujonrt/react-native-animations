import styled from 'styled-components/native';
import * as Window from '@mobile/services/dimensions';

interface IProps {
  textColor?: string;
  textSize?: number;
}
export const Text = styled.Text`
  font-size: ${(props: IProps) =>
    Window.fontScale(props.textSize ? props.textSize : (16 as number))}px;
  color: ${(props: IProps) =>
    props.textColor ? props.textColor : ({ theme }) => theme.colors.text};
`;
