import React from 'react';
import { StyleSheet, View } from 'react-native';

import ExpressionWindow from './ExpressionWindow';
import ValueButton from './ValueButton';
import ActionButton from './ActionButton';

export default function Calculator() {
  const [stack] = React.useState<Array<string>>([]);
  const [prevExpression, setPrevExpression] = React.useState('');
  const [inputExpression, setInputExpression] = React.useState('');
  const [hasOperation, setHasOperation] = React.useState(false);
  const [hasResult, setHasResult] = React.useState(false);

  const isOperation = (value: string) => {
    return isNaN(+value);
  }

  const updateInputExpression = () => {
    setInputExpression(stack.join(''));
  }

  const clearPrevExpression = () => {
    setPrevExpression('');
  }

  const clearStack = () => {
    stack.splice(0, stack.length);
  }

  const clearAll = () => {
    clearStack();
    setHasOperation(false);
    setHasResult(false);
    clearPrevExpression();
    updateInputExpression();
  }

  const removeLastElement = () => {
    let lastvalue = stack.pop();
    if (lastvalue && isOperation(lastvalue)) {
      setHasOperation(false);
    }
    updateInputExpression();
  }

  const calculate = () => {
    if (!hasOperation) {
      return;
    }

    let result = '';
    try {
      result = eval(inputExpression);
    }
    catch (e) {
      return;
    }

    let expression = inputExpression;
    clearAll();
    setPrevExpression(expression + '=' + result);
    stack.push(...Array.from(result.toString()));
    setHasResult(true);
    updateInputExpression();
  }

  const pushValue = (value: string) => {
    if (stack.length === 0) {
      if (isOperation(value)) {
        stack.push('0');
        setHasOperation(true);
      }
      stack.push(value);
    }
    else if (hasResult) {
      if (!isOperation(value)) {
        clearStack();
      }
      else {
        setHasOperation(true);
      }
      stack.push(value);
      setHasResult(false);
    }
    else {
      let lastValue = stack[stack.length - 1];
      if (isOperation(value)) {
        if (hasOperation) {
          if (isOperation(lastValue)) {
            stack[stack.length - 1] = value;
          }
          else {
            calculate();
            stack.push(value);
            setHasResult(false);
          }
        }
        else {
          stack.push(value);
        }
        setHasOperation(true);
      }
      else {
        stack.push(value);
      }
    }
    updateInputExpression();
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ExpressionWindow prevExpression={prevExpression} inputExpression={inputExpression} />
      </View>

      <View style={styles.row}>
        <ActionButton text='C' onPress={clearAll} />

        <ActionButton text='<-' onPress={removeLastElement} />
      </View>

      <View style={styles.row}>
        <ValueButton value='+' onPress={pushValue} />

        <ValueButton value='-' onPress={pushValue} />

        <ValueButton value='*' onPress={pushValue} />

        <ValueButton value='/' onPress={pushValue} />
      </View>

      <View style={styles.row}>
        <ValueButton value='7' onPress={pushValue} />

        <ValueButton value='8' onPress={pushValue} />

        <ValueButton value='9' onPress={pushValue} />
      </View>

      <View style={styles.row}>
        <ValueButton value='4' onPress={pushValue} />

        <ValueButton value='5' onPress={pushValue} />

        <ValueButton value='6' onPress={pushValue} />
      </View>

      <View style={styles.row}>
        <ValueButton value='1' onPress={pushValue} />

        <ValueButton value='2' onPress={pushValue} />

        <ValueButton value='3' onPress={pushValue} />
      </View>

      <View style={styles.row}>
        <ValueButton value='0' onPress={pushValue} />

        <ActionButton text='=' onPress={calculate} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});