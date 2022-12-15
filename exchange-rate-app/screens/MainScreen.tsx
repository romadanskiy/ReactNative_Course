import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import RootStackParamList from './RootStackParamList';
import CurrencyInput from '../components/CurrencyIpnut';
import exchangeRateStore from '../stores/ExchangeRateStore';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

const MainScreen = observer(() => {
  const navigation = useNavigation<NavigationProp>();

  const selectCurrency = (isFromCurrency: boolean) => {
    navigation.navigate('CurrencyList', { isFromCurrency: isFromCurrency });
  }

  React.useEffect(() => {
    exchangeRateStore.loadCurrentExcnahgeRate();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ExpoStatusBar style='auto' />

        <SafeAreaView style={styles.topSafeArea} />

        <SafeAreaView style={styles.bottomSafeArea}>
          <CurrencyInput
            currencyValue={exchangeRateStore.fromCurrencyValue}
            currencyCode={exchangeRateStore.fromCurrency.code}
            onCurrencyValueChanged={exchangeRateStore.setFromCurrencyValue}
            onChangeCurrencyButtonPress={() => selectCurrency(true)} />

          <TouchableOpacity
            style={styles.swapButton}
            onPress={exchangeRateStore.swapCurrencies}>
            <Text style={styles.swapButtonText}>↓↑</Text>
          </TouchableOpacity>

          <CurrencyInput
            currencyValue={exchangeRateStore.isLoading ? '...' : exchangeRateStore.toCurrencyValue}
            currencyCode={exchangeRateStore.toCurrency.code}
            onCurrencyValueChanged={exchangeRateStore.setToCurrencyValue}
            onChangeCurrencyButtonPress={() => selectCurrency(false)} />
        </SafeAreaView>
      </KeyboardAvoidingView >
    </TouchableWithoutFeedback>
  );
});

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
  },
  topSafeArea: {
    flex: 0,
  },
  bottomSafeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swapButton: {
    marginVertical: 40,
  },
  swapButtonText: {
    fontSize: 22,
  },
});