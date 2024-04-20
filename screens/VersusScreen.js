import React, { useState } from "react";
import { View } from "react-native";
import SearchItems from "../searchItems.js";
import globalStyles from "../style/globalStyles";
import { Card, Checkbox } from "react-native-paper";
import { Text } from "react-native-paper";

const VersusScreen = ({ navigation, route }) => {
  let selectedDiff = route.params;
  let winTitle = "You Won!!!"

  const [checkboxes1, setCheckboxes1] = useState(generateCheckboxes());
  const [checkboxes2, setCheckboxes2] = useState(generateCheckboxes());

  function generateCheckboxes() {
    const numberOfCheckboxes = Number(selectedDiff.selectedDiff);
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
    setCheckboxes1((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === checkboxId
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  const allChecked1 = checkboxes1.every((checkbox) => checkbox.checked);

  if (allChecked1) {
    winTitle = "Player 1 Wins!!"
    console.log("Player 1 wins");
    navigation.navigate("Win", {winTitle}); // Replace 'DifferentScreen' with the actual screen name
  }

  const handleCheckboxToggle2 = (checkboxId) => {
    setCheckboxes2((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === checkboxId
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  const allChecked2 = checkboxes2.every((checkbox) => checkbox.checked);

  if (allChecked2) {
    winTitle = "Player 2 Wins !!!"
    navigation.navigate("Win", {winTitle}); 
  }

  return (
    <View style={globalStyles.container}>
      <Text variant="headlineLarge" style={{ fontFamily: "Caveat_400Regular" }}>
        Player 1
      </Text>
      {checkboxes1.map((checkbox) => (
        <Card
          onPress={() => handleCheckboxToggle1(checkbox.id)}
          key={checkbox.id}
          status={checkbox.checked ? "checked" : "unchecked"}
          style={[
            globalStyles.card,
            checkbox.checked && globalStyles.clickedCard,
          ]}
        >
          <Card.Content style={{ justifyContent: "center" }}>
            <Text style={globalStyles.text}>
              {SearchItems.easy[checkbox.id.split("_")[1]]}
            </Text>
          </Card.Content>
        </Card>
      ))}
      <Text variant="headlineLarge" style={{ fontFamily: "Caveat_400Regular" }}>
        Player 2
      </Text>
      {checkboxes2.map((checkbox) => (
        <Card
          onPress={() => handleCheckboxToggle2(checkbox.id)}
          key={checkbox.id}
          status={checkbox.checked ? "checked" : "unchecked"}
          style={[
            globalStyles.card,
            checkbox.checked && globalStyles.clickedCard,
          ]}
        >
          <Card.Content style={{ justifyContent: "center" }}>
            <Text style={globalStyles.text}>
              {SearchItems[checkbox.id.split("_")[1]]}
            </Text>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
};

export default VersusScreen;
