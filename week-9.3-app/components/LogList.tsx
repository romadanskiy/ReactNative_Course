import React from 'react';
import { View, StyleSheet, FlatList, ListRenderItem } from 'react-native';

import LogLine from './LogLine';

interface LogListProps {
  data: string[];
}

export default function TodoList({ data }: LogListProps) {
  const keyExtractor = (index: number) => {
    return index.toString();
  };

  const itemSeparator = () => <View style={styles.itemSeparator} />;

  const renderItem: ListRenderItem<string> = ({ item, index }) => (
    <LogLine
      index={index}
      data={item} />
  );

  return (
    <FlatList
      data={data.reverse()}
      contentContainerStyle={{ paddingVertical: 10 }}
      keyExtractor={(item, index) => keyExtractor(index)}
      renderItem={renderItem}
      ItemSeparatorComponent={itemSeparator}
      showsHorizontalScrollIndicator={false} />
  );
}

const styles = StyleSheet.create({
  itemSeparator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10,
    marginHorizontal: 20,
  },
});