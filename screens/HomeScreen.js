import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  ImageBackground,
} from "react-native";
import { useFonts, Overpass_400Regular } from "@expo-google-fonts/overpass";
import homeStyles from "../style/homeStyles";
import SignButton from "../components/SignButton.js";
import ButtonRouteParams from "../components/ButtonRouteParams.js";

const HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    Overpass_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <SafeAreaView style={[homeStyles.containerHome]}>
      <ImageBackground
        source={require("../images/home-bg.jpg")}
        style={[homeStyles.backgroundImage]}
      >
        <View style={{ height: "8%" }}></View>
        <View
          style={{
            backgroundColor: "#E0E1DE",
            height: "15%",
            width: "60%",
            borderWidth: 4, 
            borderColor: "#0c0f14", 
            borderRadius: 10,
          }}
        >
          <View
            style={{
              margin: "1.5%",
              backgroundColor: "#157264",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              padding: "1%",
            }}
          >
            <Text style={[homeStyles.text, { fontSize: 42 }]}>
              Road Trip Game
            </Text>
          </View>
        </View>

        <View style={[homeStyles.container]}>
          <ButtonRouteParams 
          dest={"Play"}
          selectedDiff = {"medium"}
          selectedNum = {4}
          ></ButtonRouteParams>
          <SignButton dest={"Settings"}></SignButton>
          <SignButton dest={"How To Play"}></SignButton>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
