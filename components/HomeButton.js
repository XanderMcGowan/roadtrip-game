
import React from "react";
import { IconButton } from "react-native-paper";

const HomeButton = ({ navigation }) => {
  return (
    <IconButton
      icon="home"
      size={20}
      onPress={() => navigation.navigate("Home")}
    />
  );
};

export default HomeButton;
