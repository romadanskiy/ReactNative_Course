import { makeAutoObservable } from 'mobx'

import LogStore from "./LogStore";
import TodoStore from "./TodoStore";

export default class RootStore {
  logStore: LogStore;
  todoStore: TodoStore;

  constructor() {
    this.logStore = new LogStore(this);
    this.todoStore = new TodoStore(this);
    makeAutoObservable(this);
  }
}