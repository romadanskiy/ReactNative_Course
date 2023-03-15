import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute  } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from './RootStackPrams';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
type UserProfileRouteProp = RouteProp<RootStackParamList, 'Welcome'>;

function WelcomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<UserProfileRouteProp>();
  const userName = route.params.userName;

  const onLogOutButtonPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ExpoStatusBar style='light' />

      <View style={styles.header}>
        <Text style={styles.title}>Welcome</Text>

        <Text style={styles.subtitle}>Hello, {userName}!</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={onLogOutButtonPress}>
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1117',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  subtitle: {
    color: '#66686d',
    fontSize: 17,
    textAlign: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#73777d',
    width: 250,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#595d63',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});