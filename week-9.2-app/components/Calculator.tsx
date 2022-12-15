import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { observer } from "mobx-react-lite"

import ExpressionWindow from './ExpressionWindow';
import ValueButton from './ValueButton';
import ActionButton from './ActionButton';

import calculatorStore from '../stores/CalculatorStore';

const Calculator = observer(() => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ExpressionWindow prevExpression={calculatorStore.prevExpression} inputExpression={calculatorStore.inputExpression} />
      </View>

      <View style={styles.row}>
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>MobX Version</Text>
        </View>
      </View>

      <View style={styles.row}>
        <ActionButton text='C' onPress={calculatorStore.clearAll} />

        <ActionButton text='<-' onPress={calculatorStore.removeLastElement} />
      </View>

      <View style={styles.row}>
        <ValueButton value='+' onPress={calculatorStore.pushValue} />

        <ValueButton value='-' onPress={calculatorStore.pushValue} />

        <ValueButton value='*' onPress={calculatorStore.pushValue} />

        <ValueButton value='/' onPress={calculatorStore.pushValue} />
      </View>

      <View style={styles.row}>
        <ValueButton value='7' onPress={calculatorStore.pushValue} />

        <ValueButton value='8' onPress={calculatorStore.pushValue} />

        <ValueButton value='9' onPress={calculatorStore.pushValue} />
      </View>

      <View style={styles.row}>
        <ValueButton value='4' onPress={calculatorStore.pushValue} />

        <ValueButton value='5' onPress={calculatorStore.pushValue} />

        <ValueButton value='6' onPress={calculatorStore.pushValue} />
      </View>

      <View style={styles.row}>
        <ValueButton value='1' onPress={calculatorStore.pushValue} />

        <ValueButton value='2' onPress={calculatorStore.pushValue} />

        <ValueButton value='3' onPress={calculatorStore.pushValue} />
      </View>

      <View style={styles.row}>
        <ValueButton value='0' onPress={calculatorStore.pushValue} />

        <ActionButton text='=' onPress={calculatorStore.calculate} />
      </View>
    </View>
  );
});

export default Calculator;

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
  versionContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: 5,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  versionText: {
    color: '#656E77',
  },
});