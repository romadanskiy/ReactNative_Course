import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, SafeAreaView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from './RootStackPrams';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const userName = 'Kirill';
const password = '123';

function LoginScreen() {
  const navigation = useNavigation<NavigationProp>();

  const [inputUserName, setInputUserName] = React.useState('');
  const [inputPassword, setInputPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const clearErrorMessage = () => {
    setErrorMessage('');
  }

  const isInputDataValid = () => {
    return inputUserName === userName && inputPassword === password;
  }

  const onSignInButtonPress = () => {
    if (isInputDataValid()) {
      clearErrorMessage();
      navigation.navigate('Welcome', { userName: inputUserName });
    }
    else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style='light' />

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.loginForm}>
          <View style={styles.header}>
            <Text style={styles.title}>Sign in</Text>

            <Text style={styles.subtitle}>Login to your account</Text>
          </View>

          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>

          <TextInput
            style={styles.input}
            placeholder='Username'
            textContentType='username'
            placeholderTextColor='#66686d'
            onChangeText={text => { clearErrorMessage(); setInputUserName(text) }} />

          <TextInput
            style={styles.input}
            placeholder='Password'
            textContentType='password'
            secureTextEntry={true}
            placeholderTextColor='#66686d'
            onChangeText={text => { clearErrorMessage(); setInputPassword(text) }} />

          <TouchableOpacity
            style={styles.button}
            onPress={onSignInButtonPress}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1117',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginForm: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
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
  input: {
    color: '#ffffff',
    fontSize: 17,
    width: 250,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ffffff',
    padding: 10,
    margin: 10,
  },
  button: {
    backgroundColor: '#1e8bf0',
    width: 250,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#0c1443',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  errorText: {
    color: '#b22222',
    fontSize: 17,
    textAlign: 'center',
  },
});