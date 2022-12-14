import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface FilterButtonProps {
  text: string,
  buttonFilterOnlyClosed: boolean | null,
  currentFilterOnlyClosed: boolean | null,
  onPress: (showOnlyClosed: boolean | null) => void;
}

export default function FilterButton({ text, buttonFilterOnlyClosed, currentFilterOnlyClosed, onPress }: FilterButtonProps) {
  return (
    <TouchableOpacity
      style={styles.filterButton}
      onPress={() => onPress(buttonFilterOnlyClosed)}>
      <Text style={[styles.filterButtonText, { color: buttonFilterOnlyClosed === currentFilterOnlyClosed ? 'black' : 'gray' }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  filterButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  filterButtonText: {
    fontSize: 16,
    textTransform: 'uppercase',
  },
});