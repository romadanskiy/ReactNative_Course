import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform, Text, Image, TouchableOpacity } from 'react-native';

import ImageAssets from './assets/ImageAssets';

export default function App() {
  return (
    <View style={styles.container}>
      <ExpoStatusBar style='auto' />

      <SafeAreaView style={styles.topSafeArea} />

      <SafeAreaView style={styles.bottomSafeArea}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={ImageAssets.like} />
        </View>

        <View style={styles.haederContainer}>
          <Text style={styles.headerText}>Congratulation, your order is accepted</Text>
        </View>

        <View style={styles.noteContainer}>
          <Text style={styles.noteText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
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
  topSafeArea: {
    flex: 0,
  },
  bottomSafeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    marginBottom: 60,
  },
  icon: {
    width: 130,
    height: 130,
  },
  haederContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 30,
  },
  noteContainer: {
    marginHorizontal: 20,
    marginBottom: 60,
  },
  noteText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'gray'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#44a4ec',
    width: 200,
    height: 60,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});