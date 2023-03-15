import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import ITodoData from './ITodoData';
import TodoLine from './TodoLine';

interface TodoListProps {
  data: ITodoData[];
  onTodoPress: (index: number) => void;
}

export default function TodoList({ data, onTodoPress }: TodoListProps) {
  const keyExtractor = (index: number) => {
    return index.toString();
  };

  const renderItem: ListRenderItem<ITodoData> = ({ item, index }) => (
    <TodoLine
      index={index}
      data={item}
      onPress={onTodoPress} />
  );

  return (
    <FlatList
      data={data}
      contentContainerStyle={{ flexDirection: 'column-reverse', paddingVertical: 10 }}
      keyExtractor={(item, index) => keyExtractor(index)}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false} />
  );
}