// HomeScreen.js
import React from "react";
import { View, Button, StyleSheet, ImageBackground, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  let selectedDiff = "4";
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../images/bg.png")} resizeMode="stretch" style={styles.image}>
        <Text style={styles.text}>Road Trip Game</Text>
        <View>
          <Button
            title="Play"
            onPress={() => navigation.navigate("Page1", { selectedDiff })}
          />
          <Button
            title="Go to Settings"
            onPress={() => navigation.navigate("Settings")}
          />
          <Button
            title="How to Play"
            onPress={() => navigation.navigate("Page3")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default HomeScreen;
