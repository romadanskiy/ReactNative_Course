import { makeAutoObservable } from 'mobx'

import ITodoData from '../components/ITodoData'

class TodoStore {
  todos: ITodoData[] = [];
  filterOnlyClosed: boolean | null = null;

  constructor() {
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
  }

  changeStatus = (index: number, isClosed: boolean) => {
    let newTodos = [...this.todos];
    let todo = newTodos[index];
    todo.isClosed = isClosed;
    this.todos = newTodos;
  }

  changeFilter = (filterOnlyClosed: boolean | null) => {
    this.filterOnlyClosed = filterOnlyClosed;
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

export default new TodoStore();