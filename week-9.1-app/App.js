import React, { Component } from 'react';
import { StyleSheet, Platform, StatusBar, View, SafeAreaView } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import TaskListScreen from './components/TaskListScreen'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ExpoStatusBar style='auto' />

        <SafeAreaView style={{ flex: 1 }}>
          <TaskListScreen />
        </SafeAreaView>
      </View>
    );
  }
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
});