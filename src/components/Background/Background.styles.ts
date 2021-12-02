import styled from 'styled-components/native';

interface IProps {
  backgroundColor?: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${(props: IProps) =>
    props.backgroundColor
      ? props.backgroundColor
      : ({ theme }) => theme.colors.background};
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${(props: IProps) =>
    props.backgroundColor
      ? props.backgroundColor
      : ({ theme }) => theme.colors.background};
`;
