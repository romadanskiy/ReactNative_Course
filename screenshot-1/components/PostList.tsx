import React from 'react';
import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native';
import { PostItem, IPostData } from './PostItem';

const postDataModels: IPostData[] = [
  {
    id: '1',
    postText: 'Hello hello',
    userAvatarImagePath: 'path',
  },
  {
    id: '2',
    postText: 'Hello hello',
    userAvatarImagePath: 'path',
  },
  {
    id: '3',
    postText: 'Hello hello',
    userAvatarImagePath: 'path',
  },
  {
    id: '4',
    postText: 'Hello hello',
    userAvatarImagePath: 'path',
  },
  {
    id: '5',
    postText: 'Hello hello',
    userAvatarImagePath: 'path',
  },
  {
    id: '6',
    postText: 'Hello hello',
    userAvatarImagePath: 'path',
  },
  {
    id: '7',
    postText: 'Hello hello',
    userAvatarImagePath: 'path',
  },
  {
    id: '8',
    postText: 'Hello hello',
    userAvatarImagePath: 'path',
  },
  {
    id: '9',
    postText: 'Hello hello',
    userAvatarImagePath: 'path',
  },
  {
    id: '10',
    postText: 'Hello hello',
    userAvatarImagePath: 'path',
  },
  {
    id: '11',
    postText: 'Hello hello',
    userAvatarImagePath: 'path',
  },
  {
    id: '12',
    postText: 'Hello hello',
    userAvatarImagePath: 'path',
  },
  {
    id: '13',
    postText: 'Hello hello',
    userAvatarImagePath: 'path',
  },
];

const PostList = () => {
  const renderItem: ListRenderItem<IPostData> = ({item}) => (
    <PostItem data={item} />
  );

  return (
    <View>
      <FlatList 
        data={postDataModels} 
        renderItem={renderItem} 
        keyExtractor={(post: IPostData) => post.id} />
    </View>
  );
}

export { PostList };