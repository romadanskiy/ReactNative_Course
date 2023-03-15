import React from 'react';
import { StyleSheet, FlatList, Image, View, Dimensions, ListRenderItem } from 'react-native';

interface IImageData {
  imagePath: string,
}

const screenWidth = Dimensions.get('window').width;
const numColumns = 3;
const imageMargin = 1;
const imageWidth = (screenWidth - imageMargin * 2) / numColumns - imageMargin * 2;
const imageHeight = imageWidth;

const imageExample: IImageData = { imagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/React-native_square.png' };
const imageCount = 14;
const data: IImageData[] = Array(imageCount).fill(imageExample);

export default function ImageGallery() {
  const renderItem: ListRenderItem<IImageData> = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{ uri: item.imagePath }} />
    </View>
  );

  const keyExtractor = (index: number) => {
    return index.toString();
  };

  return (
    <FlatList
      contentContainerStyle={{ margin: imageMargin }}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => keyExtractor(index)}
      numColumns={numColumns} />
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginHorizontal: imageMargin,
    marginVertical: imageMargin,
  },
  image: {
    width: imageWidth,
    height: imageHeight,
  },
});