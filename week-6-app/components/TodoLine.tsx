import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import ITodoData from './ITodoData';

interface TodoLineProps {
  index: number,
  data: ITodoData;
  onPress: (index: number) => void;
}

export default function TodoLine({ index, data, onPress }: TodoLineProps) {
  return (
    <TouchableOpacity
      style={[styles.todoLine, { backgroundColor: data.isClosed ? 'lightyellow' : 'lightgreen' }]}
      onPress={() => onPress(index)}>
      <Text style={styles.todoText}>{data.text}</Text>
      <Text style={styles.todoStatus}>{data.isClosed ? 'closed' : 'open'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todoLine: {
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
  },
  todoText: {
    fontSize: 18,
    marginBottom: 10,
  },
  todoStatus: {
    fontSize: 12,
    textTransform: 'uppercase',
  },
});