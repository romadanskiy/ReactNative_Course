import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, StatusBar, View, SafeAreaView, Text, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0);
  const [isCounterDisabled, setIsCounterDisabled] = React.useState(false);
  const [isUnlockButtonDisabled, setIsUnlockButtonDisabled] = React.useState(true);

  const plus = () => {
    let newCount = count + 1
    setCount(newCount)
    setIsCounterDisabled(newCount > 3)
    setIsUnlockButtonDisabled(newCount <= 3)
  }

  const enableCounterButton = () => {
    setCount(0)
    setIsCounterDisabled(false)
    setIsUnlockButtonDisabled(true)
  }

  return (
    <View style={styles.container}>
      <ExpoStatusBar style='auto' backgroundColor='#FC766A' />

      <SafeAreaView style={{flex: 1}}>
        <View style={styles.column}>
          <TouchableOpacity onPress={plus} disabled={isCounterDisabled}>
            <View style={[styles.btn, isCounterDisabled ? styles.disabledBtn : styles.enabledBtn]}>
              <Text style={styles.btnText}>{count}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={enableCounterButton} disabled={isUnlockButtonDisabled}>
            <View style={[styles.btn, isUnlockButtonDisabled ? styles.disabledBtn : styles.enabledBtn]}>
              <Text style={styles.btnText}>Enable button</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FC766A',
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
  },
  column: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'justify',
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  enabledBtn: {
    backgroundColor: '#983936',
    borderWidth: 1,
    borderColor: '#EBA6A3',
  },
  disabledBtn: {
    backgroundColor: '#783937',
  },
  btnText: {
    textAlign: 'center',
    color: '#F1AC88',
    fontSize: 40,
    textTransform: 'capitalize',
  },
});