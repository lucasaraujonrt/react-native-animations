import React from 'react';
import { renderWithTheme } from '@mobile/test-utils';
import { Input } from '@mobile/components';

describe('Input Snapshot', () => {
  const component = renderWithTheme(<Input title="testing" />);

  it('should be render Input component', () => {
    expect(component).toMatchSnapshot();
  });
});
