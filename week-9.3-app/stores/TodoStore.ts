import { makeAutoObservable } from 'mobx'

import RootStore from './RootStore';
import ITodoData from '../components/ITodoData'

export default class TodoStore {
  rootStore: RootStore;
  todos: ITodoData[] = [];
  filterOnlyClosed: boolean | null = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  get filteredTodos() {
    if (this.filterOnlyClosed === null)
      return this.todos;
    return this.todos.filter((item) => item.isClosed === this.filterOnlyClosed)
  }

  getTodo = (index: number) => {
    return this.todos[index];
  }

  addTodo = (text: string) => {
    let newTodo: ITodoData = { text: text, isClosed: false, imageUri: '' };
    let newTodos = [...this.todos, newTodo];
    this.todos = newTodos;

    this.rootStore.logStore.log('Todo \"' + text + '\" is added.');
  }

  changeStatus = (index: number, isClosed: boolean) => {
    let newTodos = [...this.todos];
    let todo = newTodos[index];

    if (todo.isClosed === isClosed)
      return;

    todo.isClosed = isClosed;
    this.todos = newTodos;

    let status = isClosed ? 'Closed' : 'Open';
    this.rootStore.logStore.log('Todo \"' + todo.text + '"\ status is changed to \"' + status + '\".');
  }

  changeFilter = (filterOnlyClosed: boolean | null) => {
    if (this.filterOnlyClosed === filterOnlyClosed)
      return;

    this.filterOnlyClosed = filterOnlyClosed;

    let filter = filterOnlyClosed === null ? 'All' : filterOnlyClosed ? 'Only Closed' : 'Only Open';
    this.rootStore.logStore.log('Filter is changed to \"' + filter + '\".');
  }

  changeImage = (index: number, imageUri: string) => {
    let newTodos = [...this.todos];
    let todo = newTodos[index];

    if (todo.imageUri === imageUri)
      return;

    todo.imageUri = imageUri;
    this.todos = newTodos;

    this.rootStore.logStore.log('Todo \"' + todo.text + '"\ image is changed to \"' + imageUri + '\".');
  }

  deleteTodo = (index: number) => {
    let todo = this.todos[index];
    let newTodos = this.todos.filter((item, i) => i != index);
    this.todos = newTodos;

    this.rootStore.logStore.log('Todo \"' + todo.text + '"\ is deleted.');
  }
}