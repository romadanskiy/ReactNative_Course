import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Counter } from './components/Counter';

export default function App() {
  return (
    <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={{flex: 1}}>
      <View style={styles.container}>
        <Counter titleFontSize={25} />

        <StatusBar style='light' />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
