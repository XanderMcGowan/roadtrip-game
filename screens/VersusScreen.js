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

const VersusScreen = ({ navigation, route }) => {
  let gameParams = route.params;
  let winTitle = "You Won!!!";
  console.log(gameParams);
  let randomArr = getRandomIndexes(gameParams);

  const [randomArray, setRandomArray] = useState(randomArr);
  const [checkboxes1, setCheckboxes1] = useState(generateCheckboxes1());
  const [checkboxes2, setCheckboxes2] = useState(generateCheckboxes2());
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

  function generateCheckboxes1() {
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
  function generateCheckboxes2() {
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

  const handleCheckboxToggle1 = (checkboxId) => {
    playSound();
    console.log(checkboxId);
    setCheckboxes1((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === checkboxId
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  const handleCheckboxToggle2 = (checkboxId) => {
    playSound();
    console.log(checkboxId);
    setCheckboxes2((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === checkboxId
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  function checkAllAndNavigate1(checkboxes, navigation) {
    const allChecked = checkboxes.every((checkbox) => checkbox.checked);

    if (allChecked) {
      setTimeout(() => {
        winTitle = "Player 1 Wins!";
        navigation.navigate("Win", { winTitle });
      }, 60);
    }
  }
  checkAllAndNavigate1(checkboxes1, navigation);

  function checkAllAndNavigate2(checkboxes, navigation) {
    const allChecked = checkboxes.every((checkbox) => checkbox.checked);

    if (allChecked) {
      setTimeout(() => {
        winTitle = "Player 2 Wins!";
        navigation.navigate("Win", { winTitle });
      }, 60);
    }
  }
  checkAllAndNavigate2(checkboxes2, navigation);

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
          <Text style={[styles.text, { fontSize: 42 }]}>Player 1</Text>
          <View style={[styles.container]}>
            {checkboxes1.map((checkbox) => (
              <Card
                onPress={() => handleCheckboxToggle1(checkbox.id)}
                key={checkbox.id}
                status={checkbox.checked ? "checked" : "unchecked"}
                style={[styles.card, checkbox.checked && styles.clickedCard]}
              >
                <Card.Content style={{ justifyContent: "center" }}>
                  <Text style={styles.text}>
                    {randomArray[checkbox.id.split("_")[1]]}
                  </Text>
                </Card.Content>
              </Card>
            ))}
          </View>
          <Text style={[styles.text, { fontSize: 42 }]}>Player 2</Text>
          <View style={[styles.container]}>
            {checkboxes2.map((checkbox) => (
              <Card
                onPress={() => handleCheckboxToggle2(checkbox.id)}
                key={checkbox.id}
                status={checkbox.checked ? "checked" : "unchecked"}
                style={[styles.card, checkbox.checked && styles.clickedCard]}
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
  },
  card: {
    marginRight: "2%",
    marginLeft: "2%",
    marginTop: "5%",
    backgroundColor: "#CA5940",
    height: "40%",
    width: "46%",
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 10,
  },
  clickedCard: {
    opacity: 0.5,
  },
  text: {
    textAlign: "center",
    fontFamily: "Overpass_400Regular",
    fontSize: 28,
    color: "white",
  },
});

export default VersusScreen;
