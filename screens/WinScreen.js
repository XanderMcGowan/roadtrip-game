import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Audio } from "expo-av";
import SignButton from "../components/SignButton";

import LottieView from "lottie-react-native";
import Confetti from "../assets/confetti2.json";
import { Button } from "react-native-paper";

const WinScreen = ({ navigation }) => {

  const [sound, setSound] = useState();
  const [backgroundImage, setBackgroundImage] = useState(null);

  const backgroundImages = [
    require('../images/win-bg1.jpg'), // Replace with your image paths
    require('../images/win-bg2.jpg'),
    require('../images/win-bg3.jpg'),
    require('../images/win-bg4.jpg'),
    require('../images/win-bg5.jpg'),
    require('../images/win-bg6.jpg')
  ];

  useEffect(() => {
    // Generate random background image on component mount
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    setBackgroundImage(backgroundImages[randomIndex]);
    console.log(backgroundImage)
  }, []);





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
    <View style={[styles.container]}>
      <ImageBackground
        source={backgroundImage}
        style={[styles.backgroundImage]}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor:'white',
            height: "80%",
            zIndex: 1,
          }}
        >
          <LottieView
            style={styles.lottie}
            source={Confetti}
            resizeMode="cover"
            autoPlay
            loop={true}
          />
        <View
          style={{
            backgroundColor: "#E0E1DE",
            height: "25%",
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
            <Text style={[styles.text, { fontSize: 38 }]}>
              You Won!!!
            </Text>
          </View>
        </View>
        </View>
        <View
        style={{
          height:'15%'
        }}
        >

        <SignButton dest={"Home"} ></SignButton>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    // resizeMode: 'cover',
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  text: {
    // paddingTop: '95%',
    textAlign: "center",
    fontFamily: 'Overpass_400Regular',
    fontSize: 50,
    color: "white",
  },
});

export default WinScreen;
