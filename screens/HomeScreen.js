import React from "react";
import { View, SafeAreaView, Text, ImageBackground, Pressable } from "react-native";
import { Button } from "react-native-paper";
import { useFonts, Caveat_400Regular } from "@expo-google-fonts/caveat";
import homeStyles from "../style/homeStyles";
import CoolAnimation from "../components/CoolAnimation.js";

const HomeScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Caveat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  let selectedDiff = "medium";
  let selectedNum = 4;
  let dest = "Settings"

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
            borderWidth: 4, // Border width
            borderColor: "#0c0f14", // Border color
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
            <Text style={[homeStyles.text, { fontSize: 42, color: "#E0E1DE" }]}>
              Road Trip Game
            </Text>
          </View>
        </View>

        <View style={[homeStyles.container]}>
          <Button
            mode="elevated"
            uppercase="true"
            labelStyle={[homeStyles.buttonLabelStyle]}
            style={[homeStyles.button]}
            onPress={() =>
              navigation.navigate("Solo", { selectedDiff, selectedNum })
            }
          >
            Play
          </Button>

          <Button
            mode="text"
            uppercase="true"
            labelStyle={[homeStyles.buttonLabelStyle]}
            onPress={() => navigation.navigate("Settings")}
            style={[homeStyles.button]}
          >
            <View style={{textAlign:'center'}}>
              <Text style={[homeStyles.text]}>Settings</Text>
            </View>
          </Button>
          <Pressable
          onPress={() => navigation.navigate("Settings")}
          style={{
            backgroundColor: "#E0E1DE",
            height: "15%",
            width: "60%",
            borderWidth: 4, // Border width
            borderColor: "#0c0f14", // Border color
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
            <Text style={[homeStyles.text, { fontSize: 42, color: "#E0E1DE" }]}>
              Settings
            </Text>
          </View>
        </Pressable>
            <CoolAnimation
            dest={dest}
           ></CoolAnimation>
          <Button
            mode="elevated"
            uppercase="true"
            labelStyle={[homeStyles.buttonLabelStyle]}
            onPress={() => navigation.navigate("HowToPlay")}
            style={[homeStyles.button]}
          >
            How to Play
          </Button>
        </View>
        <View style={{ height: "10%" }}></View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
