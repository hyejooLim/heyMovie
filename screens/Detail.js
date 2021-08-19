import React from 'react';
import { View, Text } from 'react-native';

const Detail = ({
  navigation,
  route: {
    params: { id, title },
  },
}) => {
  navigation.setOptions({ title });
  
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default Detail;
