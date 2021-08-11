import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Tab from './Tab';
import Detail from '../screens/Detail';

const Stack = createStackNavigator();

// navigator 안에 있는 모든 screen은 navigation prop을 가짐
export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Movie' component={Tab} />
      <Stack.Screen name='Detail' component={Detail} />
    </Stack.Navigator>
  );
};
