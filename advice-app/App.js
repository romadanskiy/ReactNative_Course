import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function App() {
  const [advice, setAdvice] = React.useState('');

  const getRandomId = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
  };

  const getAdvice = () => {
    setAdvice('...');
    axios
      .get("https://api.adviceslip.com/advice/" +
        getRandomId(1, 200))
      .then((response) => {
        setAdvice(response.data.slip.advice);
      });
  };


  return (
    <View style={styles.container}>
      <ExpoStatusBar style='auto' />

      <View style={styles.adviceContainer}>
        <Text style={styles.adviceText}>{advice}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={getAdvice}>
        <Text style={styles.buttonText}>Get advice</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  adviceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adviceText: {
    fontSize: 28,
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    margin: 20,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
});