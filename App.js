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
import Teststate from './src/Teststate';
import Cobabitcoin from './src/Cobabitcoin';
import Testflatlist from './src/Testflatlist'

const AppNavigator = createStackNavigator({
  Firstscreen: {
    screen: Firstscreen,
  },
  Bantenscreen: {
    screen: Bantenscreen,
  },
  Jakartascreen: {
    screen: Jakartascreen,
  },
  Jawabaratscreen: {
    screen: Jawabaratscreen,
  },
  Teststate:{
    screen : Teststate,
  },
  Cobabitcoin:{
    screen : Cobabitcoin,
  },
  Testflatlist:{
    screen : Testflatlist,
  },
});

export default createAppContainer(AppNavigator);