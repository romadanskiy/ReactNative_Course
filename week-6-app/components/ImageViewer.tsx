import React from 'react';
import { StyleSheet, Image } from 'react-native';

interface ImageViewerProps {
  placeholderImageSource: any,
  selectedImage: string;
}

export default function ImageViewer({ placeholderImageSource, selectedImage }: ImageViewerProps) {
  const imageSource = typeof selectedImage === 'string' && selectedImage.trim().length > 0
    ? { uri: selectedImage }
    : placeholderImageSource;

  return <Image style={styles.image} source={imageSource} />;
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  }
});