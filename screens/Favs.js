import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { movieApi } from '../api';

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

  return (
    <View>
      <Text>{like.discover?.length}</Text>
    </View>
  );
};

export default Favs;
