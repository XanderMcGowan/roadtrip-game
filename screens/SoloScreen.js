import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import { Audio } from "expo-av";
import globalStyles from "../style/globalStyles";
import searchItems from "../searchItems";
import getRandomIndexes from "../functions/getRandomIndexes";

const SoloScreen = ({ navigation, route }) => {
  let gameParams = route.params;
  let randomArr = getRandomIndexes(gameParams);

  // console.log("this is out side")

  const [randomArray, setRandomArray] = useState(randomArr);
  const [cardStyle, setCardStyle] = useState(checkCardStyle());
  const [checkboxes, setCheckboxes] = useState(generateCheckboxes());
  const [sound, setSound] = useState();

  function checkCardStyle() {
    if (gameParams.selectedNum > 4) {
      return true;
    }
    return false;
  }

  // const styles = {
  //   popup: {
  //     backgroundColor: cardStyle ? "blue" : "red",
  //   },
  // };
  console.log(cardStyle);

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
        navigation.navigate("Win");
      }, 60);
    }
  }
  checkAllAndNavigate(checkboxes, navigation);

  return (
    <View
      style={[
        globalStyles.container,
        {
          // backgroundColor: cardStyle ? "blue" : "red",
        },
      ]}
    >
      {checkboxes.map((checkbox) => (
        <Card
          onPress={() => handleCheckboxToggle(checkbox.id)}
          key={checkbox.id}
          status={checkbox.checked ? "checked" : "unchecked"}
          style={[
            globalStyles.card,
            checkbox.checked && globalStyles.clickedCard,
          {width: cardStyle ? "46%" : "50%"}]}
        >
          <Card.Content style={{ justifyContent: "center" }}>
            <Text style={globalStyles.text}>
              {randomArray[checkbox.id.split("_")[1]]}
            </Text>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
};

export default SoloScreen;
