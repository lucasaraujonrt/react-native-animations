import React from 'react';

import { Text } from './styles';

interface ITypographyProps {
  size: 'small' | 'large' | 'medium' | 'title';
  font: 'bold' | 'medium' | 'regular';
  color: string;
  children: string | React.ReactNode;
  textAlign?: string;
}

const Typography = ({ children, ...props }: ITypographyProps) => (
  <Text {...props}>{children}</Text>
);

export default Typography;
