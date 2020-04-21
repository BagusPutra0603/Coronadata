/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Firstscreen from './src/Firstscreen';
import Bantenscreen from './src/Bantenscreen';
import Jakartascreen from './src/Jakartascreen';
import Jawabaratscreen from './src/Jawabaratscreen';

const AppNavigator = createStackNavigator({
 Firstscreen: {
    screen: Firstscreen,
  },
  Bantenscreen:{
screen:Bantenscreen,
  },
  Jakartascreen:{
    screen:Jakartascreen,
  },
  Jawabaratscreen:{
    screen:Jawabaratscreen,
  },
},  {
  initialRouteName: 'Firstscreen',
  headerMode: 'none',
  headerShown: false,
});

export default createAppContainer(AppNavigator);