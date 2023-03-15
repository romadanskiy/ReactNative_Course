import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

import { SelectColorButton } from './SelectColorButton';
import { ActionButton } from './ActionButton';
import SquareColor from './SquareColor';

interface ControlPanelProps {
  selectedSize: number;
  onSizeChanged: (size: number) => void;
  selectedColor: SquareColor;
  onColorButtonPress: (color: SquareColor) => void;
  onAddButtonPress: () => void;
  onClearButtonPress: () => void;
}

export function ControlPanel({ selectedSize, onSizeChanged, selectedColor, onColorButtonPress, onAddButtonPress, onClearButtonPress }: ControlPanelProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.inputTitle}>
          <Text style={styles.inputTitleText}>Size</Text>
        </View>

        <Slider
          style={styles.slider}
          value={selectedSize}
          minimumValue={1}
          maximumValue={350}
          step={1}
          minimumTrackTintColor='black'
          maximumTrackTintColor='gray'
          thumbTintColor='white'
          onValueChange={(value) => onSizeChanged(value)} />

        <View style={styles.sliderValue}>
          <Text style={styles.sliderValueText}>{selectedSize}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.inputTitle}>
          <Text style={styles.inputTitleText}>Color</Text>
        </View>

        <View style={styles.colorSelectionContainer}>
          <SelectColorButton
            buttonColor={SquareColor.Yellow}
            selectedColor={selectedColor}
            onPress={onColorButtonPress} />

          <SelectColorButton
            buttonColor={SquareColor.Blue}
            selectedColor={selectedColor}
            onPress={onColorButtonPress} />

          <SelectColorButton
            buttonColor={SquareColor.Red}
            selectedColor={selectedColor}
            onPress={onColorButtonPress} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.actionContainer}>
          <ActionButton
            text='Add element'
            onPress={onAddButtonPress} />

          <ActionButton
            text='Clear'
            onPress={onClearButtonPress} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(230, 230, 230)',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  slider: {
    flex: 1,
    height: 50,
    margin: 10,
  },
  sliderValue: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    padding: 10,
    margin: 10,
  },
  sliderValueText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  inputTitle: {
    justifyContent: 'center',
    width: 70,
    padding: 10,
  },
  inputTitleText: {
    color: 'black',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  colorSelectionContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  actionContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});