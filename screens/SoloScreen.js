import React, {useState} from 'react';
import { View, Button, Text} from 'react-native';
import Checkbox from 'expo-checkbox';
import SearchItems from "../searchItems.json"


const SoloScreen = ({ navigation, route }) => {
  let selectedDiff = route.params
  console.log(typeof selectedDiff.selectedDiff)
  const [checkboxes, setCheckboxes] = useState(generateCheckboxes());

  function generateCheckboxes() {
    const numberOfCheckboxes = Number(selectedDiff.selectedDiff);
    console.log(numberOfCheckboxes)
    return new Array(numberOfCheckboxes).fill(false);
  }
  const handleCheckboxToggle = (index) => {
    console.log(index)
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);

    // Check if all checkboxes are checked
    if (updatedCheckboxes.every((checkbox) => checkbox)) {
      // Navigate to Page2 if all checkboxes are checked
      navigation.navigate('Win');
    }
  };


  return (
    <View>
        <Text><h1>Game Screen</h1></Text>

            {checkboxes.map((isChecked, index) => (
              <View key={index}>
              <Checkbox
            value={isChecked}
            onValueChange={() => handleCheckboxToggle(index)}
          />
          <Text>{SearchItems[index]}</Text>
        </View>
      ))}


    </View>
  );
  
};

export default SoloScreen;