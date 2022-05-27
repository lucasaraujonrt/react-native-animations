import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.card};
  padding: 3%;
  margin-top: 14px;
  border-radius: 8px;
`;

export const WrapperRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Project = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  margin-top: 8px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
`;

export const WrapperType = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-left: 5px;
`;

export const Type = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  padding: 1% 2%;
`;
