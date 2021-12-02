import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import { navigationRef } from './services/navigation';
import Navigator from './stack';
import { heightScale } from './services/dimensions';

class AppContent extends PureComponent {
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default connect(null, null)(AppContent);
