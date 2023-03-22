import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';

interface CurrencyInputProps {
  currencyValue: string;
  currencyCode: string;
  onCurrencyValueChanged: (value: string) => void;
  onChangeCurrencyButtonPress: () => void;
}

export default function CurrencyInput({ currencyValue, currencyCode: currencyName, onCurrencyValueChanged, onChangeCurrencyButtonPress }: CurrencyInputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          onChangeText={onCurrencyValueChanged}
          value={currencyValue}
          keyboardType='number-pad' />

        <View style={styles.delimiter} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => onChangeCurrencyButtonPress()}>
          <Text style={styles.buttonText}>
            {currencyName}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 80,
    borderWidth: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  input: {
    flex: 4,
    backgroundColor: 'white',
    fontSize: 22,
    padding: 10,
  },
  delimiter: {
    width: 1,
    backgroundColor: 'black',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  buttonText: {
    fontSize: 22,
    textTransform: 'uppercase',
  },
});