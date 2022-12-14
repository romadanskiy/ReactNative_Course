import React from 'react';
import { StyleSheet, View } from 'react-native';

import SquareColor from './SquareColor';

export interface ISquareData {
  id: string;
  size: number;
  color: SquareColor;
}

interface SquareProps {
  data: ISquareData;
}

export function Square({ data }: SquareProps) {
  return (
    <View style={[styles.square, { width: data.size, height: data.size, backgroundColor: data.color }]}></View>
  );
}

const styles = StyleSheet.create({
  square: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});