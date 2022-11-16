import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Calculator() {
  const [stack, setStack] = React.useState<Array<string>>([]);
  const [inputExpression, setInputExpression] = React.useState('');

  const isOperation = (s: string) => {
    return isNaN(+s);
  }

  const updateInputExpression = () => {
    setInputExpression(stack.join(''));
  }

  const clear = () => {
    stack.splice(0, stack.length);
    updateInputExpression();
  }

  const removeLastElement = () => {
    stack.pop()
    updateInputExpression();
  }

  const pushElement = (e: string) => {
    if (stack.length === 0) {
      if (isOperation(e)) {
        stack.push('0');
      }
      stack.push(e);
    }
    else {
      let lastElement = stack[stack.length - 1];
      if (isOperation(lastElement) && isOperation(e)) {
        stack[stack.length - 1] = e;
      }
      else {
        stack.push(e);
      }
    }
    updateInputExpression();
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>{inputExpression}</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => clear()}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => removeLastElement()}>
          <Text style={styles.buttonText}>{'<'}-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { pushElement('1'); }}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { pushElement('2'); }}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { pushElement('+'); }}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'yellow',
  },
  button: {
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