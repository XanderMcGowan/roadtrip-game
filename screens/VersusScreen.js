import React, { useState } from "react";
import { View, Button, Text} from "react-native";
import Checkbox from 'expo-checkbox';
import SearchItems from "../searchItems.json";

const VersusScreen = ({ navigation, route }) => {
  let selectedDiff = route.params
  const [checkboxes, setCheckboxes] = useState(generateCheckboxes());
  const [checkboxes2, setCheckboxes2] = useState(generateCheckboxes());

  
  function generateCheckboxes() {
    const numberOfCheckboxes = Number(selectedDiff.selectedDiff);
    return new Array(numberOfCheckboxes).fill(false);
  }

  const handleCheckboxToggle = (index) => {
    console.log(index);
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];

    setCheckboxes(updatedCheckboxes);
    if (updatedCheckboxes.every((checkbox) => checkbox)) {
      navigation.navigate("Player1WinScreen");
    }
  };

  const handleCheckboxToggle2 = (index) => {
    console.log(index);
    const updatedCheckboxes = [...checkboxes2];
    updatedCheckboxes[index] = !updatedCheckboxes[index];

    setCheckboxes2(updatedCheckboxes);
    if (updatedCheckboxes.every((checkbox) => checkbox)) {
      navigation.navigate("Player2WinScreen");
    }
  };

  return (
    <View>
      <Text>
        <h1> Versus Game Screen</h1>
      <h1> Player 1</h1>
      </Text>
      {checkboxes.map((isChecked, index) => (
        <View key={index}>
          <Checkbox
            value={isChecked}
            onValueChange={() => handleCheckboxToggle(index)}
          />
          <Text>{SearchItems[index]}</Text>
        </View>
      ))}

<h1> Player 2</h1>
      {checkboxes2.map((isChecked, index) => (
        <View key={index}>
          <Checkbox
            value={isChecked}
            onValueChange={() => handleCheckboxToggle2(index)}
          />
          <Text>{SearchItems[index]}</Text>
        </View>
      ))}
    </View>
  );
};

export default VersusScreen;
