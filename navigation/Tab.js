import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Movie from '../screens/Movie';
import TV from '../screens/TV';
import Favs from '../screens/Favs';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

export default ({ navigation, route }) => {
  useEffect(() => {
    navigation.setOptions({
      title: route.state?.routeNames[route.state?.index],
    });
  }, [route]);

  return (
    <Tab.Navigator>
      <Tab.Screen name='Movie' component={Movie} />
      <Tab.Screen name='TV' component={TV} />
      <Tab.Screen name='Favorite' component={Favs} />
      <Tab.Screen name='Search' component={Search} />
    </Tab.Navigator>
  );
};
