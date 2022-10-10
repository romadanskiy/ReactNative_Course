import React from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import { PostItem, IPostData } from './PostItem';

const postDataModels: IPostData[] = [
  {
    id: '1',
    postText: 'Tedious heart produce estimating missed civil effects nearer poor suitable attention evening reached about.',
    userAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_1.png',
  },
  {
    id: '2',
    postText: 'Only vanity regret books appear few sir off eldest both meant do excellent cold books instantly much.',
    userAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_2.png',
  },
  {
    id: '3',
    postText: 'Handsome game likewise oppose four very strangers excellent young elinor performed down smart peculiar hard concealed eagerness.',
    userAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_3.png',
  },
  {
    id: '4',
    postText: 'Quick will building advice shy. Property happen prepare direction likewise object miss removal to basket depart drift stuff ladyship large. Breeding plenty provision it form departure voice heard thoroughly concluded. Sitting all dear cousin. Hunted longer collecting forfeited like believed sir gravity told shutters.',
    userAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_4.png',
  },
  {
    id: '5',
    postText: 'Course tried true viewing enjoy earnestly continuing.',
    userAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_5.png',
  },
  {
    id: '6',
    postText: 'Jokes talked enable john views point september wonder along sufficient mile ladyship projecting remaining. Learning balls lose thrown family blind juvenile seen. Certain parlors dissuade voice. Saw perceived raillery ask may.',
    userAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_6.png',
  },
  {
    id: '7',
    postText: 'Side be dull whether others contented friend screened thrown properly newspaper times fancy.',
    userAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_7.png',
  },
  {
    id: '8',
    postText: 'Music returned material enjoyment would lasted pain held play society saved formal allow hold exercise. Excellent mr amounted distance.',
    userAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_8.png',
  },
  {
    id: '9',
    postText: 'Maids ten humanity recommend excellence moreover kindness formerly herself going improving remainder. Message shy yet shortly case. Convinced hour eldest praise fifteen remember grave noise society intention sportsman soon has good. Forty busy uncommonly dinner speaking. Breeding branched style even uncommonly intention delivered door expenses without delightful past lasting.',
    userAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_9.png',
  },
  {
    id: '10',
    postText: 'Dried returned vexed concluded sixteen two those account never waiting boy journey suffering except theirs neat.',
    userAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_10.png',
  },
  {
    id: '11',
    postText: 'Allow merely consider partiality another correct other kept excellent screened our elegance discourse.',
    userAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_11.png',
  },
  {
    id: '12',
    postText: 'Strangers differed appear many opinions plan ask terms limited extent like needed distant sociable.',
    userAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_12.png',
  },
  {
    id: '13',
    postText: 'Preferred walk small. Additions greater sixteen out whose. Sir related solicitude john county. Invitation just spot asked nay end upon. Good delivered elderly.',
    userAvatarImagePath: 'https://raw.githubusercontent.com/romadanskiy/ReactNative_Course/main/avatars/avatar_13.png',
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