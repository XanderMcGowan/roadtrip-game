
import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  ImageBackground
} from "react-native";
import { Button } from "react-native-paper";
import { useFonts, Caveat_400Regular } from "@expo-google-fonts/caveat";
import globalStyles from "../style/globalStyles";




const HomeScreen = ({ navigation }) => {

  let [fontsLoaded] = useFonts({
    Caveat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }




  let selectedDiff = "medium"
  let selectedNum = 4
  
  return (
    <SafeAreaView style={[globalStyles.containerHome]}>
      <ImageBackground source={require('../images/home-bg.jpg')} style={[globalStyles.backgroundImage]}>


            <View style={{height: '8%'}}></View>
      <Text style={[globalStyles.text, { margin: 25, fontSize: 52}]}>
        Road Trip Game
      </Text>

      <View
        style={[
          globalStyles.container,
          { justifyContent: "flex-end", alignItems: "center", flexDirection: "column" },
        ]}
      >
        <Button
          mode="elevated"
          uppercase="true"
          labelStyle={{ fontSize: 18, fontFamily: "Caveat_400Regular" }}
          style={{marginBottom: '1%'}}
          onPress={() => navigation.navigate("Solo", { selectedDiff, selectedNum })}
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
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
