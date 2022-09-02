/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {useState, useEffect} from 'react';
import type {Node} from 'react';
import {  
  Text,
  FlatList,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer, StackActions} from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/views/HomeScreen.js';

import FirstScreen from './src/views/FirstScreen.js';

import SecondScreen from './src/views/SecondScreen.js';

import StatsScreen from './src/views/StatsScreen.js';

import FormScreen from './src/views/FormScreen.js';



const Stack = createNativeStackNavigator();


const App: () => Node = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options ={{title: 'MyHome'}}/>
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{title : 'First screen'}}/>
        <Stack.Screen name = "SecondScreen" component = {SecondScreen} options = {{title : 'Https Request'}}/>
        <Stack.Screen name= "StatsScreen" component ={StatsScreen} options = {{title : "Charts"}}/>
        <Stack.Screen name= "FormScreen" component ={FormScreen} options = {{title : "Form"}}/>

      </Stack.Navigator>
    </NavigationContainer>
   
  );
};

export default App;
