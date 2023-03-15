import React from 'react';

import RootStore from './RootStore';

const rootStore = new RootStore();

export const stores = Object.freeze({
  rootStore: rootStore,
  logStore: rootStore.logStore,
  todoStore: rootStore.todoStore,
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;