import React from 'react';
import { StyleSheet, View, FlatList, ListRenderItem } from 'react-native';

import { Square, ISquareData } from './Square';

interface SquareListProps {
  data: ISquareData[];
}

export function SquareList({ data }: SquareListProps) {
  const renderItem: ListRenderItem<ISquareData> = ({ item }) => (
    <Square data={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={{ flexDirection: 'column-reverse', paddingVertical: 10 }}
        renderItem={renderItem}
        keyExtractor={(item: ISquareData) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});