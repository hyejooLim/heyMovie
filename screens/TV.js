import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { tvApi } from '../api';

const TV = () => {
  const [tv, setTV] = useState({
    today: [],
    todayError: null,
    weekday: [],
    weekdayError: null,
    popular: [],
    popularError: null,
    topRated: [],
    topRatedError: null,
  });
  const getData = async () => {
    const [today, todayError] = await tvApi.today();
    const [weekday, weekdayError] = await tvApi.weekday();
    const [popular, popularError] = await tvApi.popular();
    const [topRated, topRatedError] = await tvApi.topRated();
    setTV({
      today,
      todayError,
      weekday,
      weekdayError,
      popular,
      popularError,
      topRated,
      topRatedError,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Text>{tv.today?.length}</Text>
    </View>
  );
};

export default TV;
