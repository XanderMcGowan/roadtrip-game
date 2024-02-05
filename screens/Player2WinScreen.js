import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../style/globalStyles";

import { Button } from "react-native-paper";
const Player2WinScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={globalStyles.text}>Player 2 Win Screen</Text>
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

export default Player2WinScreen;