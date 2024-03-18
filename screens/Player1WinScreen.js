import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import LottieView from "lottie-react-native";
import Confetti from '../assets/confetti.json'
import globalStyles from "../style/globalStyles";

const Player1WinScreen = ({ navigation}) => {

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LottieView
      style={globalStyles.lottie} 
      source={Confetti}
      resizeMode='cover'
      autoPlay
      loop={false}/>
      <Text style={globalStyles.text}>Player 1 Wins !!</Text>
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

export default Player1WinScreen;