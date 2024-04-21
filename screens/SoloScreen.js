import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { Card } from "react-native-paper";
import { Audio } from "expo-av";
import SignButton from "../components/SignButton";
import getRandomIndexes from "../functions/getRandomIndexes";

const SoloScreen = ({ navigation, route }) => {
  let gameParams = route.params;
  let winTitle = "You Won!!!";
  console.log(gameParams);
  let randomArr = getRandomIndexes(gameParams);

  const [randomArray, setRandomArray] = useState(randomArr);
  const [cardStyle, setCardStyle] = useState(checkCardStyle());
  const [checkboxes, setCheckboxes] = useState(generateCheckboxes());
  const [sound, setSound] = useState();
  const [backgroundImage, setBackgroundImage] = useState(null);

  const backgroundImages = [
    require("../images/play-bg1.jpg"),
    require("../images/play-bg2.jpg"),
    require("../images/play-bg3.jpg"),
    require("../images/play-bg4.jpg"),
    require("../images/play-bg5.jpg"),
    require("../images/play-bg6.jpg"),
    require("../images/play-bg7.jpg"),
    require("../images/play-bg8.jpg"),
    require("../images/play-bg9.jpg"),
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    setBackgroundImage(backgroundImages[randomIndex]);
  }, []);

  function checkCardStyle() {
    if (gameParams.selectedNum > 4) {
      return true;
    }
    return false;
  }

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../sounds/click2.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  function generateCheckboxes() {
    const numberOfCheckboxes = gameParams.selectedNum;
    const checkboxesArray = Array.from(
      { length: numberOfCheckboxes },
      (_, index) => ({
        id: `checkbox_${index}`,
        checked: false,
      })
    );
    return checkboxesArray;
  }

  const handleCheckboxToggle = (checkboxId) => {
    playSound();
    console.log(checkboxId);
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === checkboxId
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  function checkAllAndNavigate(checkboxes, navigation) {
    const allChecked = checkboxes.every((checkbox) => checkbox.checked);

    if (allChecked) {
      setTimeout(() => {
        console.log("Timeout completed!");
        navigation.navigate("Win", { winTitle });
      }, 60);
    }
  }
  checkAllAndNavigate(checkboxes, navigation);

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ImageBackground
        source={backgroundImage}
        style={[styles.backgroundImage]}
      >
        <View
          style={{
            paddingTop: "10%",
            height: "100%",
            flex: 1,
          }}
        >
          <View style={[styles.container]}>
            {checkboxes.map((checkbox) => (
              <Card
                onPress={() => handleCheckboxToggle(checkbox.id)}
                key={checkbox.id}
                status={checkbox.checked ? "checked" : "unchecked"}
                style={[
                  styles.card,
                  checkbox.checked && styles.clickedCard,
                  { width: cardStyle ? "46%" : "50%" },
                ]}
              >
                <Card.Content style={{ justifyContent: "center" }}>
                  <Text style={styles.text}>
                    {randomArray[checkbox.id.split("_")[1]]}
                  </Text>
                </Card.Content>
              </Card>
            ))}
          </View>
          <View
            style={{
              height: "15%",
            }}
          >
            <SignButton dest={"Home"}></SignButton>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    paddingTop: "10%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: "25%",
  },
  card: {
    marginRight: "2%",
    marginLeft: "2%",
    marginTop: "5%",
    backgroundColor: "#CA5940",
    height: "20%",
    width: "50%",
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 10,
  },
  clickedCard: {
    opacity: 0.5,
  },
  text: {
    paddingTop: "6%",
    textAlign: "center",
    fontFamily: "Overpass_400Regular",
    fontSize: 28,
    color: "white",
  },
});

export default SoloScreen;
