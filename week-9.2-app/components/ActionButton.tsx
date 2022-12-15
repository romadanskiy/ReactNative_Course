import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface ActionButtonProps {
  text: string;
  onPress: () => void;
}

export default function ActionButton({ text, onPress }: ActionButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => onPress()}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#656E77',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    margin: 15,
  },
  buttonText: {
    color: '#DDDBDE',
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});