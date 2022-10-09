import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export interface IPostData {
  id: string,
  postText: string,
  userAvatarImagePath: string,
}

const PostItem = ({data}: {data: IPostData}) => {
  return(
    <View style={styles.container}>
      <Image 
        style={styles.userAvatar} 
        source={{uri: data.userAvatarImagePath}} 
      />
      <Text>{data.postText}</Text>
    </View>
  );
}

export { PostItem };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 8,
    marginTop: 8,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 10,
  },
  userAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  }
});