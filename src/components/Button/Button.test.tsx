import React from 'react';
import { renderWithTheme } from '@mobile/test-utils';
import { Button } from '@mobile/components';

describe('Button Snapshot', () => {
  const component = renderWithTheme(
    <Button title="testing" onPress={() => {}} disabled={false} />
  );

  it('should be render', () => {
    expect(component).toMatchSnapshot();
  });

  it('should be render with loading', () => {
    const component = renderWithTheme(
      <Button title="testing" onPress={() => {}} loading disabled={false} />
    );
    expect(component).toMatchSnapshot();
  });
});
