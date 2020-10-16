import React from 'react';

import { AppLoading } from 'expo';

import {
  useFonts,
  Oswald_200ExtraLight,
  Oswald_300Light,
  Oswald_400Regular,
  Oswald_500Medium,
  Oswald_600SemiBold,
  Oswald_700Bold 
} from '@expo-google-fonts/oswald'

import MainNavigator from './navigation/MainNavigator'

export default function App() {
  let [fontsLoaded] = useFonts({
    Oswald_200ExtraLight,
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_600SemiBold,
    Oswald_700Bold, 
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <MainNavigator />
  );
}