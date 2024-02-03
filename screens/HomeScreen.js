// HomeScreen.js
import React, { useState } from "react";
import {
  View,
  Pressable,
  SafeAreaView,
  Text,
  ImageBackground
} from "react-native";
import { useFonts, Caveat_400Regular } from "@expo-google-fonts/caveat";
import globalStyles from "../style/globalStyles";

const HomeScreen = ({ navigation }) => {
  const [isPressed1, setIsPressed1] = useState(false);
  const [isPressed2, setIsPressed2] = useState(false);
  const [isPressed3, setIsPressed3] = useState(false);

  let [fontsLoaded] = useFonts({
    Caveat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handlePressIn = (index) => {
    console.log(index);
    if (index == 1) {
      setIsPressed1(true);
    } else if (index == 2) {
      setIsPressed2(true);
    } else {
      setIsPressed3(true);
    }
  };

  const handlePressOut = (index) => {
    console.log(index);
    if (index == 1) {
      setIsPressed1(false);
    } else if (index == 2) {
      setIsPressed2(false);
    } else {
      setIsPressed3(false);
    }
  };

  let selectedDiff = "4";
  return (
    <SafeAreaView style={globalStyles.container}>


      <Text style={[globalStyles.text, {margin: 25, fontSize: 48}]}>Road Trip Game</Text>


      <View style={[globalStyles.container, {justifyContent:"flex-end", alignItems:"center"}]}>

        <Pressable
          style={[
            globalStyles.button,
            isPressed1 && globalStyles.buttonPressed,
          ]}
          onPress={() => navigation.navigate("Solo", { selectedDiff })}
          onPressIn={() => handlePressIn(1)}
          onPressOut={() => handlePressOut(1)}
          activeOpacity={0.7}
          >
          <Text style={globalStyles.buttonText}>Play</Text>
        </Pressable>

        <Pressable
          style={[
            globalStyles.button,
            isPressed2 && globalStyles.buttonPressed,
          ]}
          onPress={() => navigation.navigate("Settings")}
          onPressIn={()=>handlePressIn(2)}
          onPressOut={() => handlePressOut(2)}
          activeOpacity={0.7}
          >
          <Text style={globalStyles.buttonText}>Settings</Text>
        </Pressable>

        <Pressable
          style={[
            globalStyles.button,
            isPressed3 && globalStyles.buttonPressed,
            {marginBottom:'3%'}
          ]}
          onPress={() => navigation.navigate("HowToPlay")}
          onPressIn={handlePressIn}
          onPressOut={() => handlePressOut(3)}
          activeOpacity={0.7}
          >
          <Text style={globalStyles.buttonText}>How to Play</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};


export default HomeScreen;
