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

      <View style={{flex: 1}}>
        <Text style={styles.postText} numberOfLines={4} ellipsizeMode={'tail'}>
          {data.postText}
        </Text>
      </View>
    </View>
  );
}

export { PostItem };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 6,
    marginTop: 6,
    padding: 12,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  userAvatar: {
    alignSelf: 'flex-start',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 12,
  },
  postText: {
    fontSize: 18,
  },
});