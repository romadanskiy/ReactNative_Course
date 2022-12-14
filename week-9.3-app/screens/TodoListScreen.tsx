import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, SafeAreaView, StatusBar, Platform, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite'

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import RootStackParamList from './RootStackParamList';
import FilterButton from '../components/FilterButton';
import TodoList from '../components/TodoList';
import { useStore } from '../stores/StoreHooks';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'TodoList'>;

const TodoListScreen = observer(() => {
  const todoStore = useStore('todoStore');

  const navigation = useNavigation<NavigationProp>();

  const [text, setText] = React.useState('');

  const addTodo = () => {
    todoStore.addTodo(text);
    setText('');
  };

  const editTodo = (index: number) => {
    navigation.navigate('TodoEdit', { index: index });
  }

  const openLogs = () => {
    navigation.navigate('LogList');
  }

  const isAddButtonDisabled = () => {
    return typeof text !== 'string' || text.trim().length === 0
  }

  const todos = [...todoStore.filteredTodos];

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ExpoStatusBar style='auto' />

      <SafeAreaView style={styles.topSafeArea} />

      <SafeAreaView style={styles.bottomSafeArea}>
        <View style={styles.headerContainer}>
          <View style={styles.filterContainer}>
            <FilterButton
              text='All'
              buttonFilterOnlyClosed={null}
              currentFilterOnlyClosed={todoStore.filterOnlyClosed}
              onPress={todoStore.changeFilter} />

            <FilterButton
              text='Open'
              buttonFilterOnlyClosed={false}
              currentFilterOnlyClosed={todoStore.filterOnlyClosed}
              onPress={todoStore.changeFilter} />

            <FilterButton
              text='Closed'
              buttonFilterOnlyClosed={true}
              currentFilterOnlyClosed={todoStore.filterOnlyClosed}
              onPress={todoStore.changeFilter} />
          </View>

          <View style={styles.versionContainer}>
            <Text style={styles.versionText}>MobX Version</Text>
          </View>

          <TouchableOpacity
            style={styles.logButton}
            onPress={openLogs}>
            <Text style={styles.buttonText}>View logs</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.todoList}>
          <TodoList
            data={todos}
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
          <Text style={styles.buttonText}>Add Todo</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView >
  );
});

export default TodoListScreen;

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
    backgroundColor: 'lightgray',
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  headerContainer: {
    backgroundColor: 'lightgray',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
    borderWidth: 1,
    marginTop: 20,
    marginHorizontal: 20,
  },
  versionContainer: {
    alignItems: 'flex-end',
    marginVertical: 3,
    marginHorizontal: 20,
  },
  versionText: {
    fontSize: 12,
    color: 'gray',
  },
  todoList: {
    flex: 1,
    backgroundColor: 'white',
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
  logButton: {
    backgroundColor: 'darkgray',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    textTransform: 'uppercase',
  },
});