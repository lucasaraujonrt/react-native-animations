import { NavigationContainer } from '@react-navigation/native';
import React, { PureComponent } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { connect } from 'react-redux';

import { heightScale } from './services/dimensions';
import { navigationRef } from './services/navigation';
import Navigator from './stack';

class AppContent extends PureComponent {
  render() {
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
          paddingTop: heightScale(0.05),
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <NavigationContainer ref={navigationRef}>
          <Navigator />
        </NavigationContainer>
      </KeyboardAvoidingView>
    );
  }
}

export default connect(null, null)(AppContent);
