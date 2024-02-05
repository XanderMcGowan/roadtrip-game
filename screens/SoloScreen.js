import React, {useState, useEffect} from 'react';
import { View, Text} from 'react-native';
// import Checkbox from 'expo-checkbox';
import SearchItems from "../searchItems.json"
import { Card, Checkbox }  from 'react-native-paper';
import globalStyles from '../style/globalStyles';

const SoloScreen = ({ navigation, route }) => {
  let selectedDiff = route.params
  
  const [checkboxes, setCheckboxes] = useState(generateCheckboxes());
  
function generateCheckboxes() {
  const numberOfCheckboxes = Number(selectedDiff.selectedDiff) // Random number of checkboxes (1 to 5)
  const checkboxesArray = Array.from({ length: numberOfCheckboxes }, (_, index) => ({
    id: `checkbox_${index}`,
    checked: false,
  }));
  return checkboxesArray;
}

const handleCheckboxToggle = (checkboxId) => {
  setCheckboxes((prevCheckboxes) =>
    prevCheckboxes.map((checkbox) =>
      checkbox.id === checkboxId ? { ...checkbox, checked: !checkbox.checked } : checkbox
    )
  );
};

const allChecked = checkboxes.every((checkbox) => checkbox.checked);

// Navigate to a different screen when all checkboxes are checked
if (allChecked) {
  navigation.navigate('Win'); // Replace 'DifferentScreen' with the actual screen name
}

return (
  <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
    {checkboxes.map((checkbox) => (
      <Card>

        <Checkbox.Item
          key={checkbox.id}
          label={SearchItems[checkbox.id.split('_')[1]]}
          status={checkbox.checked ? 'checked' : 'unchecked'}
          onPress={() => handleCheckboxToggle(checkbox.id)}
        />
      </Card>

    ))}
  </View>
);
};




export default SoloScreen;