// HomeScreen.js
import React, { useState } from "react";
import {
  View,
  Pressable,
  SafeAreaView,
  Text,
  ImageBackground,
} from "react-native";
import { useFonts, Caveat_400Regular } from "@expo-google-fonts/caveat";
import globalStyles from "../style/globalStyles";

import { Button } from "react-native-paper";

const HomeScreen = ({ navigation }) => {

  let [fontsLoaded] = useFonts({
    Caveat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }




  let selectedDiff = "4";
  return (
    <SafeAreaView style={globalStyles.container}>
            <View style={{height: '10%'}}></View>
      <Text style={[globalStyles.text, { margin: 25, fontSize: 48 }]}>
        Road Trip Game
      </Text>

      <View
        style={[
          globalStyles.container,
          { justifyContent: "flex-end", alignItems: "center" },
        ]}
      >
        <Button
          mode="elevated"
          uppercase="true"
          labelStyle={{ fontSize: 18, fontFamily: "Caveat_400Regular" }}
          style={{marginBottom: '1%'}}
          onPress={() => navigation.navigate("Solo", { selectedDiff })}
        >Play</Button>

        <Button
          mode="elevated"
          uppercase="true"
          labelStyle={{ fontSize: 18, fontFamily: "Caveat_400Regular" }}
          onPress={() => navigation.navigate("Settings")}
          style={{marginBottom: '1%'}}

        >
          Settings
        </Button>

        <Button
          mode="elevated"
          uppercase="true"
          labelStyle={{ fontSize: 18, fontFamily: "Caveat_400Regular" }}
          onPress={() => navigation.navigate("HowToPlay")}
          style={{marginBottom: '1%'}}

        >
          How to Play
        </Button>
      </View>
      <View style={{height: '10%'}}></View>
    </SafeAreaView>
  );
};

export default HomeScreen;
