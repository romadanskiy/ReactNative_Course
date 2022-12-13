import React from 'react';
import { StyleSheet, View, FlatList, ListRenderItem } from 'react-native';
import { CallHistoryItem, ICallHistoryData } from './CallHistoryItem';

const callHistoryModels: ICallHistoryData[] = [
  {
    id: '1',
    contactName: 'Dale Cooper',
    contactAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_1.png',
    callType: 'voice',
    callDate: '2022-10-10 01:13',
  },
  {
    id: '2',
    contactName: 'Leonard Hofstadter',
    contactAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_2.png',
    callType: 'video',
    callDate: '2022-10-09 18:31',
  },
  {
    id: '3',
    contactName: 'Grace Shelby',
    contactAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_3.png',
    callType: 'video',
    callDate: '2022-10-09 11:35',
  },
  {
    id: '4',
    contactName: 'Penny',
    contactAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_4.png',
    callType: 'voice',
    callDate: '2022-10-08 22:22',
  },
  {
    id: '5',
    contactName: 'Amelia Brand',
    contactAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_5.png',
    callType: 'voice',
    callDate: '2022-10-08 15:00',
  },
  {
    id: '6',
    contactName: 'Laura Palmer',
    contactAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_6.png',
    callType: 'voice',
    callDate: '2022-10-08 13:23',
  },
  {
    id: '7',
    contactName: 'Sheldon Cooper',
    contactAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_7.png',
    callType: 'video',
    callDate: '2022-10-07 19:46',
  },
  {
    id: '8',
    contactName: 'M. Gustave',
    contactAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_8.png',
    callType: 'voice',
    callDate: '2022-10-07 16:02',
  },
  {
    id: '9',
    contactName: 'Mom',
    contactAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_9.png',
    callType: 'video',
    callDate: '2022-10-06 09:58',
  },
  {
    id: '10',
    contactName: 'Grandma',
    contactAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_10.png',
    callType: 'voice',
    callDate: '2022-10-06 09:44',
  },
  {
    id: '11',
    contactName: 'Mia Dolan',
    contactAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_11.png',
    callType: 'voice',
    callDate: '2022-10-05 19:17',
  },
  {
    id: '12',
    contactName: 'Murph',
    contactAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_12.png',
    callType: 'voice',
    callDate: '2022-10-01 11:30',
  },
  {
    id: '13',
    contactName: 'Dad',
    contactAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_13.png',
    callType: 'video',
    callDate: '2022-09-27 12:57',
  },
  {
    id: '14',
    contactName: 'bigboi',
    contactAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_14.png',
    callType: 'video',
    callDate: '2022-09-25 23:13',
  },
];

const CallHistoryList = () => {
  const RenderItem: ListRenderItem<ICallHistoryData> = ({item}) => (
    <CallHistoryItem data={item} />
  );

  const ItemDivider = () => <View style={styles.itemDivider} />;
  
  return (
    <View>
      <FlatList 
        data={callHistoryModels} 
        renderItem={RenderItem} 
        keyExtractor={(post: ICallHistoryData) => post.id}
        ItemSeparatorComponent={ItemDivider} />
    </View>
  );
}

export { CallHistoryList };

const styles = StyleSheet.create({
  itemDivider: {
    height: 1,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
});