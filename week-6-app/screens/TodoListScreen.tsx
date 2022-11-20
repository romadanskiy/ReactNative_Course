import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, SafeAreaView, StatusBar, Platform, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import RootStackParamList from './RootStackParamList';
import FilterButton from '../components/FilterButton';
import ITodoData from '../components/ITodoData';
import TodoList from '../components/TodoList';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'TodoList'>;

export default function TodoListScreen() {
  const navigation = useNavigation<NavigationProp>();

  const [todos, setTodos] = React.useState<Array<ITodoData>>([]);
  const [filteredTodos, setFilteredTodos] = React.useState<Array<ITodoData>>([]);
  const [showOnlyClosed, setShowOnlyClosed] = React.useState<boolean | null>(null);
  const [text, setText] = React.useState('');

  const addTodo = () => {
    let newTodo: ITodoData = { text: text, isClosed: false, imageUri: '' };
    let newTodos = [...todos, newTodo];
    setTodos(newTodos);
    filterTodos(newTodos, showOnlyClosed);
    setText('');
  };

  const editTodo = (index: number) => {
    let todo = todos[index];
    navigation.navigate('TodoEdit', {
      index: index,
      data: todo,
      changeStatus: changeStatus,
      deleteTodo: deleteTodo,
      changeImage: changeImage
    });
  }

  const changeStatus = (index: number, isClosed: boolean) => {
    let newTodos = [...todos];
    let todo = newTodos[index];
    todo.isClosed = isClosed;
    setTodos(newTodos);
    filterTodos(newTodos, showOnlyClosed);
  }

  const deleteTodo = (index: number) => {
    let newTodos = todos.filter((item, i) => i != index);
    setTodos(newTodos);
  }

  const changeImage = (index: number, imageUri: string) => {
    let newTodos = [...todos];
    let todo = newTodos[index];
    todo.imageUri = imageUri;
    setTodos(newTodos);
  }

  const changeFilter = (showOnlyClosed: boolean | null) => {
    setShowOnlyClosed(showOnlyClosed);
    filterTodos(todos, showOnlyClosed);
  }

  const filterTodos = (todos: ITodoData[], showOnlyClosed: boolean | null) => {
    if (showOnlyClosed === null)
      setFilteredTodos(todos);
    else
      setFilteredTodos(todos.filter((item) => item.isClosed === showOnlyClosed));
  }

  const isAddButtonDisabled = () => {
    return typeof text !== 'string' || text.trim().length === 0
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ExpoStatusBar style='auto' />

      <SafeAreaView style={styles.topSafeArea} />

      <SafeAreaView style={styles.bottomSafeArea}>

        <View style={styles.row}>
          <View style={styles.filterContainer}>
            <FilterButton
              text='All'
              buttonShowOnlyClosed={null}
              currentShowOnlyClosed={showOnlyClosed}
              onPress={changeFilter} />

            <FilterButton
              text='Open'
              buttonShowOnlyClosed={false}
              currentShowOnlyClosed={showOnlyClosed}
              onPress={changeFilter} />

            <FilterButton
              text='Closed'
              buttonShowOnlyClosed={true}
              currentShowOnlyClosed={showOnlyClosed}
              onPress={changeFilter} />
          </View>
        </View>

        <View style={styles.todoList}>
          <TodoList
            data={filteredTodos}
            onTodoPress={editTodo} />
        </View>

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={newText => setText(newText)}
            value={text}>
          </TextInput>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          disabled={isAddButtonDisabled()}
          onPress={addTodo}>
          <Text style={styles.addButtonText}>Add Todo</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </KeyboardAvoidingView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
  },
  topSafeArea: {
    flex: 0,
  },
  bottomSafeArea: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'lightgray',
  },
  filterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
    borderWidth: 1,
    margin: 20,
  },
  todoList: {
    flex: 1,
  },
  textInputContainer: {
    backgroundColor: 'lightgray',
    padding: 20,
  },
  textInput: {
    backgroundColor: 'white',
    fontSize: 18,
    borderWidth: 1,
    padding: 10,
  },
  addButton: {
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  addButtonText: {
    fontSize: 16,
    textTransform: 'uppercase',
  },
});