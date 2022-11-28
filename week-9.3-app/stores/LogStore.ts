import { makeAutoObservable } from 'mobx'

import ILogStore from './ILogStore';

class LogStore implements ILogStore {
  logs: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  log = (message: string) => {
    let now = new Date();
    let newLog = now.toLocaleString() + ' | ' + message;
    this.logs.push(newLog);
  }
}

export default new LogStore();