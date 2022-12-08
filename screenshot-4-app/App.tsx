import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform } from 'react-native';

import ImageGallery from './components/ImageGallery';

export default function App() {
  return (
    <View style={styles.container}>
      <ExpoStatusBar style='auto' />

      <SafeAreaView style={styles.topSafeArea} />

      <SafeAreaView style={styles.bottomSafeArea}>
        <ImageGallery />
      </SafeAreaView>
    </View >
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
  topSafeArea: {
    flex: 0,
  },
  bottomSafeArea: {
    flex: 1,
  },
});
