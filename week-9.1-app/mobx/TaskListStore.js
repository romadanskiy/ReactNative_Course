import { makeAutoObservable } from 'mobx'

class TaskListStore {
  constructor() {
    makeAutoObservable(this);
  }

  list = [
    { title: 'Go to the School', isFinished: true },
    { title: 'Prepare tasks for today', isFinished: false },
    { title: 'Team meeting', isFinished: false },
    { title: 'Commit tasks changed', isFinished: false }
  ];

  finishItem(index) {
    const copiedList = this.list.slice();
    const isFinished = copiedList[index].isFinished;
    if (isFinished)
      return;

    copiedList[index].isFinished = true;
    this.list = copiedList;
  }

  deleteItem(index) {
    this.list = this.list.filter((item, i) => i != index);
  }
}

export default new TaskListStore();