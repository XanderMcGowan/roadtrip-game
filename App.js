// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from "react-native-paper";
import HomeScreen from "./screens/HomeScreen";
import SoloScreen from "./screens/SoloScreen";
import WinScreen from "./screens/WinScreen";
import HowToPlayScreen from "./screens/HowToPlayScreen";
import SettingScreen from "./screens/SettingsScreen";
import VersusScreen from "./screens/VersusScreen";
import Player1WinScreen from "./screens/Player1WinScreen";
import Player2WinScreen from "./screens/Player2WinScreen";

const Stack = createStackNavigator();

const App = () => {

  return (
    
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Settings" component={SettingScreen} />
          <Stack.Screen name="Versus" component={VersusScreen} />
          <Stack.Screen name="Player1WinScreen" component={Player1WinScreen} />
          <Stack.Screen name="Player2WinScreen" component={Player2WinScreen} />
          <Stack.Screen name="Solo" component={SoloScreen} />
          <Stack.Screen name="Win" component={WinScreen} />
          <Stack.Screen name="HowToPlay" component={HowToPlayScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
};

export default App;
