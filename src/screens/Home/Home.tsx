import React from 'react';
import {Linking, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import {CL_COLORS} from '../../utils/constants';

const uri =
  'https://www.walmart.com/account/login?vid=oaoh&tid=0&returnUrl=%2F';

export const HomeScreen = () => {
  return (
    <WebView
      source={{
        uri,
      }}
      originWhitelist={['*']}
      onNavigationStateChange={event => {
        if (event.url !== uri) {
          Linking.openURL(event.url);
        }
      }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
      scalesPageToFit={true}
      style={styles.webview}
    />
  );
};

const styles = StyleSheet.create({
  loginBtn: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: CL_COLORS.primary,
  },
  loginText: {
    color: CL_COLORS.white,
  },
  webview: {
    flex: 1,
  },
});
