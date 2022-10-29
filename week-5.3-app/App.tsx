import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, StatusBar, Platform, View, SafeAreaView } from 'react-native';

import { ISquareData } from './components/Square';
import { SquareList } from './components/SquareList';
import { ControlPanel } from './components/ControlPanel';
import SquareColor from './components/SquareColor';

export default function App() {
  const [inputSize, setInputSize] = React.useState(100);
  const [inputColor, setInputColor] = React.useState(SquareColor.Yellow);

  const [initialElements, setInitialElements] = React.useState(new Array<ISquareData>());
  const [data, setData] = React.useState(initialElements);
  const [idx, setIdx] = React.useState(0);

  const addElement = () => {
    let newIdx = idx + 1;
    let newSquare: ISquareData = { id: newIdx.toString(), size: inputSize, color: inputColor };
    let newArray = [...initialElements, newSquare];
    setData(newArray);
    setInitialElements(newArray);
    setIdx(newIdx);
  }

  const clear = () => {
    let emptyArray = new Array<ISquareData>();
    setData(emptyArray);
    setInitialElements(emptyArray);
    setIdx(0);
  }

  return (
    <View style={styles.container}>
      <ExpoStatusBar style='auto' backgroundColor='white' />

      <SafeAreaView style={styles.topSafeArea} />

      <SafeAreaView style={styles.bottomSafeArea}>
        <View style={styles.squareList}>
          <SquareList data={data} />
        </View>

        <View style={styles.controlPanel}>
          <ControlPanel
            selectedSize={inputSize}
            onSizeChanged={setInputSize}
            selectedColor={inputColor}
            onColorButtonPress={setInputColor}
            onAddButtonPress={addElement}
            onClearButtonPress={clear} />
        </View>
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
    backgroundColor: 'white',
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: 'rgb(230, 230, 230)',
  },
  squareList: {
    flex: 2,
  },
  controlPanel: {
    flex: 1,
  },
});