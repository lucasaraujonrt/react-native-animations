import { render } from '@testing-library/react-native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import theme from '@mobile/theme';

const Themed = (props: any) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

const renderWithTheme = (ui: any, props?: any) =>
  render(ui, { wrapper: Themed, ...props });

export default renderWithTheme;
