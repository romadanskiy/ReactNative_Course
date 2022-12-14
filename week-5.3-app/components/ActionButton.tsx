import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface ActionButtonProps {
  text: string;
  onPress: () => void;
}

export function ActionButton({ text, onPress }: ActionButtonProps) {
  return (
    <TouchableOpacity
      style={styles.actionButton}
      onPress={() => onPress()}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    margin: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});