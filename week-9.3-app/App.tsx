import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogListScreen from './screens/LogListScreen';
import TodoEditScreen from './screens/TodoEditScreen';
import TodoListScreen from './screens/TodoListScreen';
import { StoresProvider, stores } from './stores/Stores';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <StoresProvider value={stores}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TodoList">
          <Stack.Screen
            name="TodoList"
            component={TodoListScreen}
            options={{
              headerShown: false,
              contentStyle: {
                backgroundColor: 'white',
              },
            }} />

          <Stack.Screen
            name="TodoEdit"
            component={TodoEditScreen}
            options={{
              headerShown: false,
              contentStyle: {
                backgroundColor: 'white',
              },
            }} />

          <Stack.Screen
            name="LogList"
            component={LogListScreen}
            options={{
              headerShown: false,
              contentStyle: {
                backgroundColor: 'white',
              },
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoresProvider>
  );
}