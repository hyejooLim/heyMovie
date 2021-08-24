import React, { useState } from 'react';
import { Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset'; 
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';

import Stack from './navigation/Stack';

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
    const images = cacheImages(['https://images.unsplash.com/photo-1560109947-543149eceb16?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    require('./assets/splash.png')]);
    const icons = cacheFonts([Ionicons.font, FontAwesome.font]);
    
    return await Promise.all([...images, ...icons]);
  };

  const onFinish = () => setIsReady(true);

  return isReady ? (
    <>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
