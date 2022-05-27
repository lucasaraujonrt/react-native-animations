import styled from 'styled-components/native';

export const ContainerSection = styled.View`
  padding-horizontal: 25px;
`;

export const Company = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
`;

export const DateAtCompany = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  margin-top: 8px;
`;

export const SectionSeparatorComponent = styled.View`
  margin-top: 16px;
`;
