import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from "react-native-paper";
import HomeScreen from "./screens/HomeScreen";
import LogoScreen from "./screens/LogoScreen";
import SoloScreen from "./screens/SoloScreen";
import WinScreen from "./screens/WinScreen";
import HowToPlayScreen from "./screens/HowToPlayScreen";
import SettingScreen from "./screens/SettingsScreen";
import VersusScreen from "./screens/VersusScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Logo"
          screenOptions={{ headerShown: false, gestureEnabled: false, }}
        >
          <Stack.Screen name="Logo" component={LogoScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Settings" component={SettingScreen} />
          <Stack.Screen name="Versus" component={VersusScreen} />
          <Stack.Screen name="Play" component={SoloScreen} />
          <Stack.Screen name="Win" component={WinScreen} />
          <Stack.Screen name="How To Play" component={HowToPlayScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
