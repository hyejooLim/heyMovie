import React, { useState } from 'react';
import { Image, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset'; 
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

const cacheImages = (images) => images.map((image) => {
  if (typeof image === 'string') { // case: url
    return Image.prefetch(image); 
  } else { // case: module
    return Asset.fromModule(image).downloadAsync(); 
  } 
});

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [isReady, setIsReady] = useState(false);

  // function that return promise
  const loadAssets = async () => {
    const images = cacheImages(['https://user-images.githubusercontent.com/71072930/122647723-944be700-d160-11eb-9511-a58c4354085c.jpeg',
    require('./assets/splash.png')]);
    const icons = cacheFonts([Ionicons.font, Ionicons.font]);
    
    return await Promise.all([...images, ...icons]);
  };

  const onFinish = () => setIsReady(true);

  return isReady ? (
    <Text>
      start to project.
    </Text>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
