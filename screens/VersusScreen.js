import React, { useState } from "react";
import { View} from "react-native";
// import Checkbox from 'expo-checkbox';
import SearchItems from "../searchItems.json";
import globalStyles from "../style/globalStyles";
import { Card,  Checkbox }  from 'react-native-paper';
import { Text } from 'react-native-paper';

const VersusScreen = ({ navigation, route }) => {
  let selectedDiff = route.params
  
  const [checkboxes1, setCheckboxes1] = useState(generateCheckboxes());
  const [checkboxes2, setCheckboxes2] = useState(generateCheckboxes());
  
function generateCheckboxes() {
  const numberOfCheckboxes = Number(selectedDiff.selectedDiff) // Random number of checkboxes (1 to 5)
  const checkboxesArray = Array.from({ length: numberOfCheckboxes }, (_, index) => ({
    id: `checkbox_${index}`,
    checked: false,
  }));
  return checkboxesArray;
}

const handleCheckboxToggle1 = (checkboxId) => {
  setCheckboxes1((prevCheckboxes) =>
    prevCheckboxes.map((checkbox) =>
      checkbox.id === checkboxId ? { ...checkbox, checked: !checkbox.checked } : checkbox
    )
  );
};

const allChecked1 = checkboxes1.every((checkbox) => checkbox.checked);

// Navigate to a different screen when all checkboxes are checked
if (allChecked1) {
  navigation.navigate('Player1WinScreen'); // Replace 'DifferentScreen' with the actual screen name
}


const handleCheckboxToggle2 = (checkboxId) => {
  setCheckboxes2((prevCheckboxes) =>
    prevCheckboxes.map((checkbox) =>
      checkbox.id === checkboxId ? { ...checkbox, checked: !checkbox.checked } : checkbox
    )
  );
};

const allChecked2 = checkboxes2.every((checkbox) => checkbox.checked);

// Navigate to a different screen when all checkboxes are checked
if (allChecked2) {
  navigation.navigate('Player2WinScreen'); // Replace 'DifferentScreen' with the actual screen name
}

return (
  <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
      <Text variant="headlineLarge" style={{fontFamily:'Caveat_400Regular'}}>Player 1</Text>
    {checkboxes1.map((checkbox) => (
      <Card>

        <Checkbox.Item
          key={checkbox.id}
          label={SearchItems[checkbox.id.split('_')[1]]}
          status={checkbox.checked ? 'checked' : 'unchecked'}
          onPress={() => handleCheckboxToggle1(checkbox.id)}
        />
      </Card>

    ))}
      <Text variant="headlineLarge" style={{fontFamily:'Caveat_400Regular'}}>Player 2</Text>
{checkboxes2.map((checkbox) => (
      <Card>

        <Checkbox.Item
          key={checkbox.id}
          label={SearchItems[checkbox.id.split('_')[1]]}
          status={checkbox.checked ? 'checked' : 'unchecked'}
          onPress={() => handleCheckboxToggle2(checkbox.id)}
        />
      </Card>

    ))}
  </View>
);
};

export default VersusScreen;
