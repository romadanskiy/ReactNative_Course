import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface LogLineProps {
  index: number,
  data: string;
}

export default function TodoLine({ index, data }: LogLineProps) {
  return (
    <View style={styles.logLine}>
      <Text style={styles.logText}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logLine: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  logText: {
    fontSize: 16,
  },
});