import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface CalculatorButtonProps {
  text: string;
  onPress: () => void;
}

export function CalculatorButton({ text, onPress }: CalculatorButtonProps) {
  return (
    <TouchableOpacity
      style={styles.numberButton}
      onPress={() => onPress()}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  numberButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: 'green',
    margin: 15,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});