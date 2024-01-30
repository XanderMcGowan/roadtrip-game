import React, {useState} from 'react';
import { View, Button, Text, CheckBox } from 'react-native';
import SearchItems from "../searchItems.json"
import SettingScreen from './SettingsScreen';


const Page1Screen = ({ navigation }) => {
  const [checkboxes, setCheckboxes] = useState(generateCheckboxes());

  function generateCheckboxes() {
    const numberOfCheckboxes = Math.floor(Math.random() * 10) + 1;
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
      navigation.navigate('Page2');
    }
  };


  return (
    <View>
        <Text><h1>Game Screen</h1></Text>


            {checkboxes.map((isChecked, index) => (
              <View key={index}>
              <CheckBox
            value={isChecked}
            onValueChange={() => handleCheckboxToggle(index)}
          />
          <Text>{SearchItems[index]}</Text>
        </View>
      ))}


    </View>
  );
};

export default Page1Screen;