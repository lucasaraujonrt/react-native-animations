import React, { useEffect } from 'react';
import { Linking, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

import { useReduxState } from '@mobile/hooks/useReduxState';
import theme from '@mobile/theme';

import Header from '../Header';
import HyperComponent from '../hoc/HyperComponent';

const Web = () => {
  const meta =
    "const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);";

  const { web } = useReduxState();

  useEffect(() => {
    if (web.web.title === 'Mail') {
      Linking.openURL(
        `mailto:${web.web.link}?subject=${'Hello Lucas'}&body=${''}`
      );
    }
  }, [web]);

  return (
    <HyperComponent backgroundColor={theme.colors.background}>
      <Header title={web.web.title} />
      <WebView
        source={{ uri: web.web.link }}
        injectedJavaScript={meta}
        scrollEnabled
        useWebKit
      />
    </HyperComponent>
  );
};

export default Web;
