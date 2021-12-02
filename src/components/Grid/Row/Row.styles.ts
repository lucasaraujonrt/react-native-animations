import styled from 'styled-components/native';
import * as Window from '@mobile/services/dimensions';

interface IProps {
  pdTop?: number;
  pdBottom?: number;
  pdLeft?: number;
  pdRight?: number;
  alignSelf?: string;
  justifyContent?: string;
  alignItems?: string;
}

export const Row = styled.View`
  flex-direction: row;
  padding-top: ${(props: IProps) =>
    props.pdTop ? Window.heightScale(props.pdTop / 100) : 0}px;
  padding-bottom: ${(props: IProps) =>
    props.pdBottom ? Window.heightScale(props.pdBottom / 100) : 0}px;
  padding-left: ${(props: IProps) =>
    props.pdLeft ? Window.widthScale(props.pdLeft / 100) : 0}px;
  padding-right: ${(props: IProps) =>
    props.pdRight ? Window.widthScale(props.pdRight / 100) : 0}px;
  ${(props: IProps) => props.alignSelf && `align-self: ${props.alignSelf}`}
  ${(props: IProps) => props.alignItems && `align-items: ${props.alignItems}`}
  ${(props: IProps) =>
    props.justifyContent && `justify-content: ${props.justifyContent}`}
`;
