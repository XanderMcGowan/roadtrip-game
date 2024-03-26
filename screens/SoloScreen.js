import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import { Audio } from "expo-av";
import SearchItems from "../searchItems";
import globalStyles from "../style/globalStyles";
import searchItems from "../searchItems";

const SoloScreen = ({ navigation, route }) => {
  console.log(SearchItems)
  let gameParams = route.params;
  let newDiff = []
  console.log("Selected", gameParams)
  console.log(gameParams.number)


  if ( gameParams.selectedDiff == "easy") {
    newDiff = [searchItems.easy]
  } else  if ( gameParams.selectedDiff == "medium") {
    newDiff = [...searchItems.easy, ...searchItems.medium]
  } else{
    newDiff = [...searchItems.easy, ...searchItems.medium,...searchItems.hard]
    console.log(newDiff)
  }


  const [checkboxes, setCheckboxes] = useState(generateCheckboxes());
  const [sound, setSound] = useState();

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
    const numberOfCheckboxes = Number(gameParams.number); // Random number of checkboxes (1 to 5)
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
    <View style={[globalStyles.container]}>
      {checkboxes.map((checkbox) => (
        <Card
          onPress={() => handleCheckboxToggle(checkbox.id)}
          key={checkbox.id}
          status={checkbox.checked ? "checked" : "unchecked"}
          style={[
            globalStyles.card,
            checkbox.checked && globalStyles.clickedCard,
          ]}
        >
          <Card.Content style={{ justifyContent: "center" }}>
            <Text style={globalStyles.text}>
              {newDiff[checkbox.id.split("_")[1]]}
            </Text>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
};

export default SoloScreen;
