import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import RootStackParamList from './RootStackParamList';
import weatherStore from '../stores/WeatherStore';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

const MainScreen = observer(() => {
  const navigation = useNavigation<NavigationProp>();

  const choseCity = () => {
    navigation.navigate('CityList');
  }

  React.useEffect(() => {
    weatherStore.loadCurrentTemperature();
  }, []);

  return (
    <View style={styles.container}>
      <ExpoStatusBar style='auto' />

      <SafeAreaView style={styles.topSafeArea} />

      <SafeAreaView style={styles.bottomSafeArea}>
        <TouchableOpacity
          style={styles.button}
          onPress={choseCity}>
          <Text style={styles.buttonText}>{weatherStore.selectedCity.name}</Text>
        </TouchableOpacity>

        <View style={styles.temperatureContainer}>
          <Text style={styles.temperatureText}>{weatherStore.currentTemperature} °C</Text>
        </View>
      </SafeAreaView>
    </View >
  );
});

export default MainScreen;

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
    alignItems: 'center',
  },
  temperatureContainer: {
    backgroundColor: 'antiquewhite',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 110,
    borderWidth: 1,
    borderRadius: 55,
    padding: 10,
  },
  temperatureText: {
    fontSize: 30,
  },
  button: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 110,
    borderWidth: 1,
    borderRadius: 55,
    padding: 10,
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 30,
    textTransform: 'uppercase',
  },
});