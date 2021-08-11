import React from 'react';
import { View, Text, Button } from 'react-native';

const Movie = ({ navigation }) => {
  return (
    <View>
      <Text>영화</Text>
      <Button title="Movie" onPress={() => { navigation.navigate('Detail') }} />
    </View>
  );
};

export default Movie;
