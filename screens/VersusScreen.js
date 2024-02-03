import React, { useState } from "react";
import { View, Button, Text} from "react-native";
import Checkbox from 'expo-checkbox';
import SearchItems from "../searchItems.json";
import globalStyles from "../style/globalStyles";

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
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>
         Versus Game Screen
      </Text>
          <View style={globalStyles.container}>
      <Text style={globalStyles.text}>
        Player 1
        </Text>
      {checkboxes.map((isChecked, index) => (
        <View 
        style={globalStyles.checkboxCon}
        key={index}>
          <Checkbox 
            style={globalStyles.checkbox}
            value={isChecked}
            onValueChange={() => handleCheckboxToggle(index)}
            />
          <Text style={globalStyles.text}>{SearchItems[index]}</Text>
        </View>
      ))}

<Text style={globalStyles.text}>
        Player 2
        </Text>
      {checkboxes2.map((isChecked, index) => (
        <View 
        style={globalStyles.checkboxCon}

        key={index}
        >
          <Checkbox
                      style={globalStyles.checkbox}
            value={isChecked}
            onValueChange={() => handleCheckboxToggle2(index)}
            />
          <Text style={globalStyles.text}>{SearchItems[index]}</Text>
        </View>
      ))}
      </View>
    </View>
  );
};

export default VersusScreen;
