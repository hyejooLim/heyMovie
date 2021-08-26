import React, { useEffect, useState } from 'react';

import { movieApi } from '../../api';
import FavsPresenter from './FavsPresenter';

const Favs = () => {
  const [movies, setMovies] = useState({
    result: [],
    resultError: null,
  });
  const getData = async () => {
    const [result, resultError] = await movieApi.discover();
    setMovies({
      result,
      resultError,
    });
  };

  useEffect(() => { 
    getData();
  }, []);

  return <FavsPresenter {...movies} />;
};

export default Favs;