import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, TouchableOpacity, FlatList, ListRenderItem } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

import RootStackParamList from './RootStackParamList';
import ICurrencyData from '../models/ICurrencyData';
import exchangeRateStore from '../stores/ExchangeRateStore';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'CurrencyList'>;
type CurrencyListRouteProp = RouteProp<RootStackParamList, 'CurrencyList'>;

const CurrencyListScreen = observer(() => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<CurrencyListRouteProp>();

  const isFromCurrency = route.params.isFromCurrency;

  const selectCurrency = (currency: ICurrencyData) => {
    exchangeRateStore.changeCurrency(currency, isFromCurrency);
    navigation.goBack();
  }

  const renderItem: ListRenderItem<ICurrencyData> = ({ item }) => (
    <TouchableOpacity
      style={styles.currencyLine}
      onPress={() => selectCurrency(item)}>
      <Text style={styles.currencyCode}>{item.code}</Text>

      <Text style={styles.currencyName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const data = exchangeRateStore.currencyDataList.slice().sort((x, y) => x.code.localeCompare(y.code));

  return (
    <View style={styles.container}>
      <ExpoStatusBar style='auto' />

      <SafeAreaView style={styles.topSafeArea} />

      <SafeAreaView style={styles.bottomSafeArea}>
        <FlatList
          style={styles.currencyList}
          data={data}
          contentContainerStyle={{ padding: 10 }}
          keyExtractor={(city) => city.code}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false} />
      </SafeAreaView>
    </View >
  );
});

export default CurrencyListScreen;

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
  },
  currencyList: {
    flex: 1,
  },
  currencyLine: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  currencyCode: {
    fontSize: 22,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  currencyName: {
    fontSize: 14,
    textTransform: 'capitalize',
  },
});