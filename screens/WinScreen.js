import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Audio } from "expo-av";
import LottieView from "lottie-react-native";
import Confetti from "../assets/confetti.json";
import globalStyles from "../style/globalStyles";

import { Button } from "react-native-paper";
const WinScreen = ({ navigation }) => {
  const [sound, setSound] = useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../sounds/win.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    playSound();
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LottieView
        style={globalStyles.lottie}
        source={Confetti}
        resizeMode="cover"
        autoPlay
        loop={false}
      />
      <Text style={globalStyles.text}>You Win</Text>
      <Button
        mode="elevated"
        uppercase="true"
        labelStyle={{ fontSize: 18, fontFamily: "Caveat_400Regular" }}
        onPress={() => navigation.navigate("Home")}
      >
        Home
      </Button>
    </View>
  );
};

export default WinScreen;
