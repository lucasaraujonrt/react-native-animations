import React from 'react';
import { renderWithTheme } from '@mobile/test-utils';
import { TouchableOpacity } from '@mobile/components';
import { View } from 'react-native';

describe('Input Snapshot', () => {
  const component = renderWithTheme(
    <TouchableOpacity>
      <View />
    </TouchableOpacity>
  );

  it('should be render Input component', () => {
    expect(component).toMatchSnapshot();
  });
});
