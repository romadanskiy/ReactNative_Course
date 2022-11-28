import { makeAutoObservable } from 'mobx'

import RootStore from './RootStore';

export default class LogStore {
  rootStore: RootStore;
  logs: string[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  log = (message: string) => {
    let now = new Date();
    let newLog = now.toLocaleString() + ' | ' + message;
    this.logs.push(newLog);
    
    console.log(newLog);
  }
}