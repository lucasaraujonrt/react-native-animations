import styled from 'styled-components/native';

interface IStyleProps {
  backgroundColor: string;
}

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ backgroundColor }: IStyleProps) => backgroundColor};
`;

export const Scroll = styled.ScrollView`
  background-color: ${({ backgroundColor }: IStyleProps) => backgroundColor};
`;