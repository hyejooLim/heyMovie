import React, { useEffect, useState } from 'react';

import { tvApi } from '../../api';
import TvPresenter from './TvPresenter';

const TV = () => {
  const [Tv, setTv] = useState({
    loading: true,
    today: [],
    todayError: null,
    thisweek: [],
    thisweekError: null,
    popular: [],
    popularError: null,
    topRated: [],
    topRatedError: null,
  });

  const getData = async () => {
    const [today, todayError] = await tvApi.today();
    const [thisweek, thisweekError] = await tvApi.thisweek();
    const [popular, popularError] = await tvApi.popular();
    const [topRated, topRatedError] = await tvApi.topRated();
    setTv({
      loading: false,
      today,
      todayError,
      thisweek,
      thisweekError,
      popular,
      popularError,
      topRated,
      topRatedError,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return <TvPresenter {...Tv} />;
};

export default TV;
