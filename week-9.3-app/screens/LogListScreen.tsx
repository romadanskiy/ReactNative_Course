import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, SafeAreaView, StatusBar, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite'

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import RootStackParamList from './RootStackParamList';
import LogList from '../components/LogList';
import { useStore } from '../stores/StoreHooks';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LogList'>;

const LogListScreen = observer(() => {
  const logStore = useStore('logStore');

  const navigation = useNavigation<NavigationProp>();

  const goBack = () => {
    navigation.goBack();
  }

  const logs = [...logStore.logs];

  return (
    <View style={styles.container}>
      <ExpoStatusBar style='auto' />

      <SafeAreaView style={styles.topSafeArea} />

      <SafeAreaView style={styles.bottomSafeArea}>
        <View style={styles.logList}>
          <LogList data={logs} />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={goBack}>
          <Text style={styles.buttonText}>Go back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View >
  );
});

export default LogListScreen;

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
    backgroundColor: 'darkgray',
  },
  logList: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'darkgray',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    textTransform: 'uppercase',
  },
});