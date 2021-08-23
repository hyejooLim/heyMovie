import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Tab from './Tab';
import Detail from '../screens/Detail/DetailContainer';

const Stack = createStackNavigator();

// navigator 안에 있는 모든 screen은 navigation prop을 가짐
export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
          borderBottomColor: 'black',
          shadowColor: 'black', // for mobile
        },
        headerTintColor: 'white',
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name='Movie' component={Tab} />
      <Stack.Screen name='Detail' component={Detail} />
    </Stack.Navigator>
  );
};
