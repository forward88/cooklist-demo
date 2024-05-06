import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {CL_COLORS} from '../../utils/constants';

export const HomeScreen = () => {
  const openWebView = () => {
    console.log('opened webview...');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.loginBtn} onPress={openWebView}>
        <Text style={styles.loginText}>Login to Wallmart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: CL_COLORS.primary,
  },
  loginText: {
    color: CL_COLORS.white,
  },
});
