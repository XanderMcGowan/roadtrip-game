import React, {useState} from 'react';
import { View, Text} from 'react-native';
import Checkbox from 'expo-checkbox';
import SearchItems from "../searchItems.json"
import globalStyles from '../style/globalStyles';


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
    <View style={globalStyles.container}>
        <Text style={[globalStyles.text, {margin: 25, fontSize: 48}]}>Game Screen</Text>

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


    </View>
  );
  
};

export default SoloScreen;