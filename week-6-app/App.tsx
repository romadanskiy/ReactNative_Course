import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TodoListScreen from './screens/TodoListScreen';
import TodoEditScreen from './screens/TodoEditScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}