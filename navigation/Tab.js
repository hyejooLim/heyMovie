import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Movie from '../components/Movie';
import TV from '../components/TV';
import Favs from '../components/Favs';
import Search from '../components/Search';

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
