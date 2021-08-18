import React, { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Movie from '../screens/Movie/MovieContainer';
import TV from '../screens/Tv/TvContainer';
import Favs from '../screens/Favs';
import Search from '../screens/Search/SearchContainer';

const Tab = createBottomTabNavigator();

export default ({ navigation, route }) => {
  useEffect(() => {
    navigation.setOptions({
      title: route.state?.routeNames[route.state?.index],
    });
  }, [route]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';

          switch (route.name) {
            case 'Movie':
              iconName += 'film';
              break;
            case 'TV':
              iconName += 'tv';
              break;
            case 'Favorite':
              iconName += 'heart';
              break;
            case 'Search':
              iconName += 'search';
              break;
          }

          return (
            <Ionicons
              name={iconName}
              color={focused ? 'white' : 'grey'}
              size={24}
            />
          );
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: 'black',
          borderTopColor: 'black',
        },
        showLabel: false,
      }}
    >
      <Tab.Screen name='Movie' component={Movie} />
      <Tab.Screen name='TV' component={TV} />
      <Tab.Screen name='Favorite' component={Favs} />
      <Tab.Screen name='Search' component={Search} />
    </Tab.Navigator>
  );
};
