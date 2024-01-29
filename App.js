// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Page1Screen from './screens/Page1Screen';
import Page2Screen from './screens/Page2Screen';
import Page3Screen from './screens/Page3Screen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Page1" component={Page1Screen} />
        <Stack.Screen name="Page2" component={Page2Screen} />
        <Stack.Screen name="Page3" component={Page3Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
