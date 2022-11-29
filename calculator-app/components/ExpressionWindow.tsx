import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface ExpressionWindowProps {
  prevExpression: string;
  inputExpression: string;
}

export default function ExpressionWindow({ prevExpression, inputExpression }: ExpressionWindowProps) {
  return (
    <View style={styles.expressionWindow}>
      <Text style={styles.prevExpressionText}>{prevExpression}</Text>
      <Text style={styles.inputExpressionText}>{inputExpression}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  expressionWindow: {
    flex: 1,
    justifyContent: 'space-between',
    height: 105,
    backgroundColor: '#3B373B',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    margin: 15,
    padding: 15,
  },
  prevExpressionText: {
    color: '#DDDBDE',
    fontSize: 18,
  },
  inputExpressionText: {
    color: '#DDDBDE',
    fontSize: 31,
    fontWeight: 'bold',
  },
});