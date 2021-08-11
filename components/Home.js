import React from 'react';
import { View, Text, Button } from 'react-native';

// navigation: 모든 screen이 가지는 prop
const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Go to Detail" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
}; 

export default Home;
