import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, StatusBar, View, SafeAreaView } from 'react-native';
import { CallHistoryList } from './components/CallHistoryList';

export default function App() {
  return (
    <View style={styles.container}>
      <ExpoStatusBar style='light' backgroundColor='#343434' />

      <SafeAreaView>
        <CallHistoryList />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
  },
});
