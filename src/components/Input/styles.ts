import styled from 'styled-components/native';

interface IProps {
  showBorder: boolean | null;
}

export const Container = styled.View`
  flex-direction: column;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  width: 100%;
  border-color: ${({ showBorder }: IProps) =>
    showBorder ? ({ theme }) => theme.colors.primary : 'transparent'};
  padding: 10px 0; 
`;
