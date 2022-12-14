import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import SquareColor from './SquareColor';

interface SelectColorButtonProps {
  buttonColor: SquareColor;
  selectedColor: SquareColor;
  onPress: (buttonColor: SquareColor) => void;
}

export function SelectColorButton({ buttonColor, selectedColor, onPress }: SelectColorButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.colorButton, { backgroundColor: buttonColor }, selectedColor === buttonColor ? styles.selectedButton : styles.unseletedButton]}
      onPress={() => onPress(buttonColor)}>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  colorButton: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    margin: 10,
  },
  selectedButton: {
    opacity: 1,
  },
  unseletedButton: {
    opacity: 0.4,
  },
});