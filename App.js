// App.js
import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Page1Screen from './screens/Page1Screen';
import Page2Screen from './screens/Page2Screen';
import Page3Screen from './screens/Page3Screen';
import SettingScreen from './screens/SettingsScreen';
import Versus from './screens/Versus'
import Player1WinScreen from './screens/Player1WinScreen';
import Player2WinScreen from './screens/Player2WinScreen';

const Stack = createStackNavigator();


const App = () => {



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingScreen} />
        <Stack.Screen name="Versus" component={Versus} />
        <Stack.Screen name="Player1WinScreen" component={Player1WinScreen} />
        <Stack.Screen name="Player2WinScreen" component={Player2WinScreen} />
        <Stack.Screen name="Page1" component={Page1Screen} />
        <Stack.Screen name="Page2" component={Page2Screen} />
        <Stack.Screen name="Page3" component={Page3Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
