import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface ValueButtonProps {
  value: string;
  onPress: (value: string) => void;
}

export default function ValueButton({ value, onPress }: ValueButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => onPress(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#DDDBDE',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    margin: 15,
  },
  buttonText: {
    color: '#18578A',
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});