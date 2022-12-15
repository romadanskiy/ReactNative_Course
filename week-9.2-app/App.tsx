import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, StatusBar, Platform, SafeAreaView, View } from 'react-native';

import Calculator from './components/Calculator';

export default function App() {
  return (
    <View style={styles.container}>
      <ExpoStatusBar style='auto' />

      <SafeAreaView style={styles.calculator}>
        <Calculator />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
  },
  calculator: {
    flex: 1,
    margin: 10,
  },
});