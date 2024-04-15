import React from "react";
import { View, SafeAreaView, Text, ImageBackground } from "react-native";
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

  let selectedDiff = "medium";
  let selectedNum = 4;

  return (
    <SafeAreaView style={[globalStyles.containerHome]}>
      <ImageBackground
        source={require("../images/home-bg.jpg")}
        style={[globalStyles.backgroundImage]}
      >
        <View style={{ height: "8%" }}></View>
        <View 
        style={{ 
          backgroundColor: '#E0E1DE', 
          height: "15%", 
          width: "60%",
          borderWidth: 4, // Border width
          borderColor: '#0c0f14', // Border color
          borderRadius: 10,
}}>
          <View
          style={{
            margin: '1.5%',
            backgroundColor: '#157264', 
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            borderRadius: 10,
            padding:"1%",
          }}>


            <Text style={[globalStyles.text, { fontSize: 42, color:'#E0E1DE' }]}>
              Road Trip
              Game
            </Text>
          </View>
        </View>

        <View
          style={[
            globalStyles.container,
            {
              justifyContent: "flex-end",
              alignItems: "center",
              flexDirection: "column",
            },
          ]}
        >
          <Button
            mode="elevated"
            uppercase="true"
            labelStyle={{ fontSize: 18, fontFamily: "Caveat_400Regular" }}
            style={{ marginBottom: "1%" }}
            onPress={() =>
              navigation.navigate("Solo", { selectedDiff, selectedNum })
            }
          >
            Play
          </Button>

          <Button
            mode="elevated"
            uppercase="true"
            labelStyle={{ fontSize: 18, fontFamily: "Caveat_400Regular" }}
            onPress={() => navigation.navigate("Settings")}
            style={{ marginBottom: "1%" }}
          >
            Settings
          </Button>

          <Button
            mode="elevated"
            uppercase="true"
            labelStyle={{ fontSize: 18, fontFamily: "Caveat_400Regular" }}
            onPress={() => navigation.navigate("HowToPlay")}
            style={{ marginBottom: "1%" }}
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
