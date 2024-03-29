import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

import RootStackParamList from './RootStackParamList';
import ImageAssets from '../assets/ImageAssets';
import ImageViewer from '../components/ImageViewer';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'TodoEdit'>;
type TodoEditRouteProp = RouteProp<RootStackParamList, 'TodoEdit'>;

export default function TodoEditScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<TodoEditRouteProp>();

  const [isClosed, setIsClosed] = React.useState(route.params.data.isClosed);
  const [selectedImage, setSelectedImage] = React.useState(route.params.data.imageUri);

  const changeStatus = (isClosed: boolean) => {
    setIsClosed(isClosed);
    route.params.changeStatus(route.params.index, isClosed);
  }

  const deleteTodo = () => {
    route.params.deleteTodo(route.params.index);
    navigation.goBack();
  }

  const goBack = () => {
    navigation.goBack();
  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (result.canceled)
      return;

    let newImageUri = result.assets[0].uri;
    setSelectedImage(newImageUri);
    route.params.changeImage(route.params.index, newImageUri);
  };

  return (
    <View style={styles.container}>
      <ExpoStatusBar style='auto' />

      <SafeAreaView style={styles.topSafeArea} />

      <SafeAreaView style={styles.bottomSafeArea}>
        <View style={{ margin: 20 }}>
          <View style={styles.imageContainer}>
            <ImageViewer
              placeholderImageSource={ImageAssets.todoPlaceholder}
              selectedImage={selectedImage} />
          </View>

          <View style={[styles.todoInfo, { backgroundColor: isClosed ? 'lightyellow' : 'lightgreen' }]}>
            <Text style={styles.todoText}>{route.params.data.text}</Text>

            <Text style={styles.todoStatus}>{isClosed ? 'closed' : 'open'}</Text>
          </View>

          <View style={[styles.row, { marginBottom: 20 }]}>
            {isClosed &&
              <TouchableOpacity
                style={[styles.button, styles.openButton]}
                onPress={() => changeStatus(false)}>
                <Text style={styles.buttonText}>Open</Text>
              </TouchableOpacity>
            }

            {!isClosed &&
              <TouchableOpacity
                style={[styles.button, styles.closeButton]}
                onPress={() => changeStatus(true)}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            }

            <TouchableOpacity
              style={[styles.button, styles.changeImageButton]}
              onPress={pickImageAsync}>
              <Text style={styles.buttonText}>Change image</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.deleteButton]}
              onPress={deleteTodo}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.button, styles.goBackButton]}
              onPress={goBack}>
              <Text style={styles.buttonText}>Go back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View >
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
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  todoInfo: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  todoText: {
    fontSize: 18,
    marginBottom: 10,
  },
  todoStatus: {
    fontSize: 12,
    textTransform: 'uppercase',
  },
  imageContainer: {
    marginBottom: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    textTransform: 'uppercase',
  },
  closeButton: {
    flex: 1,
    backgroundColor: 'lightyellow',
    marginRight: 20,
  },
  openButton: {
    flex: 1,
    backgroundColor: 'lightgreen',
    marginRight: 20,
  },
  changeImageButton: {
    flex: 2,
    backgroundColor: 'lavender',
    marginRight: 20,
  },
  deleteButton: {
    flex: 1,
    backgroundColor: 'lightcoral',
  },
  goBackButton: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
});