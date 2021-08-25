import React, { useEffect, useState } from 'react';

import { movieApi } from '../../api';
import FavsPresenter from './FavsPresenter';

const Favs = () => {
  const [like, setLike] = useState({
    discover: [],
    discoverError: null,
  });
  const getData = async () => {
    const [discover, discoverError] = await movieApi.discover();
    setLike({
      discover,
      discoverError,
    });
  };

  useEffect(() => { 
    getData();
  }, []);

  return <FavsPresenter {...like} />;
};

export default Favs;