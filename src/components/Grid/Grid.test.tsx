import React from 'react';
import { View } from 'react-native';
import { renderWithTheme } from '@mobile/test-utils';
import { Row, Col } from '@mobile/components';

describe('Grid Snapshot', () => {
  it('should be render Row component', () => {
    const component = renderWithTheme(
      <Row>
        <View />
      </Row>
    );
    expect(component).toMatchSnapshot();
  });

  it('should be render Col component', () => {
    const component = renderWithTheme(
      <Col>
        <View />
      </Col>
    );
    expect(component).toMatchSnapshot();
  });
});
