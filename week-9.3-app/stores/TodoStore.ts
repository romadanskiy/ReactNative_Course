import { makeAutoObservable } from 'mobx'

import ITodoData from '../components/ITodoData'
import ILogStore from './ILogStore';

export default class TodoStore {
  todos: ITodoData[] = [];
  filterOnlyClosed: boolean | null = null;
  logStore: ILogStore | null = null;

  constructor(logStore: ILogStore) {
    makeAutoObservable(this);
    this.logStore = logStore;
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

    this.logStore?.log('Added a new Todo: ' + text);
  }

  changeStatus = (index: number, isClosed: boolean) => {
    let newTodos = [...this.todos];
    let todo = newTodos[index];
    todo.isClosed = isClosed;
    this.todos = newTodos;

    let status = isClosed ? 'closed' : 'open';
    this.logStore?.log('Todo \"' + todo.text + '"\ status changed to \"' + status + '\"');
  }

  changeFilter = (filterOnlyClosed: boolean | null) => {
    this.filterOnlyClosed = filterOnlyClosed;

    this.logStore?.log('Filter changed to')
  }

  changeImage = (index: number, imageUri: string) => {
    let newTodos = [...this.todos];
    let todo = newTodos[index];
    todo.imageUri = imageUri;
    this.todos = newTodos;
  }

  deleteTodo = (index: number) => {
    let newTodos = this.todos.filter((item, i) => i != index);
    this.todos = newTodos;
  }
}