import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform, Text, Image, TouchableOpacity } from 'react-native';

import ImageAssets from './assets/ImageAssets';

export default function App() {
  return (
    <View style={styles.container}>
      <ExpoStatusBar style='auto' />

      <SafeAreaView style={styles.topSafeArea} />

      <SafeAreaView style={styles.bottomSafeArea}>
        <View style={styles.itemContainer}>
          <View style={styles.itemImageContainer}>
            <Image
              style={styles.itemImage}
              source={ImageAssets.tshirt} />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Black T-Shirt</Text>
          </View>

          <View style={styles.costContainer}>
            <Text style={styles.costText}>$ 80</Text>
          </View>

          <View style={styles.aboutContainer}>
            <Text style={styles.aboutText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>

          <View style={styles.row}>
            {[...Array(5)].map((e, i) =>
              <Image
                key={i}
                style={styles.starImage}
                source={ImageAssets.star} />)}
          </View>

          <View style={styles.row}>
            {['cadetblue', 'black', 'olivedrab', 'slateblue', 'firebrick', 'gray'].map((color, i) =>
              <View key={i} style={[styles.colorPicker, { backgroundColor: color }]}></View>)}
          </View>

          <View style={styles.row}>
            {['s', 'm', 'l', 'xl'].map((size, i) =>
              <View key={i} style={styles.sizePicker}>
                <Text style={styles.sizePickerText}>{size}</Text>
              </View>)}
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

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
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    margin: 30,
  },
  titleContainer: {
    marginBottom: 15,
  },
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  costContainer: {
    marginBottom: 15,
  },
  costText: {
    color: 'green',
    fontSize: 20,
  },
  aboutContainer: {
    marginBottom: 15,
  },
  aboutText: {
    color: 'gray',
    fontSize: 20,
    textAlign: 'center',
  },
  itemImageContainer: {
    marginBottom: 15,
  },
  itemImage: {
    width: 350,
    height: 280,
    resizeMode: 'contain'
  },
  starImage: {
    tintColor: 'gold',
    width: 40,
    height: 40,
    marginHorizontal: 5,
    marginBottom: 15,
  },
  colorPicker: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,
    marginBottom: 15,
  },
  sizePicker: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 5,
    marginBottom: 30,
  },
  sizePickerText: {
    fontSize: 16,
    textTransform: 'uppercase',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#44a4ec',
    width: 'auto',
    height: 56,
    borderRadius: 28,
    marginHorizontal: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 26,
    textTransform: 'capitalize',
  },
});