import React, {useState, useEffect} from 'react';
import { View, Text} from 'react-native';
import { Card }  from 'react-native-paper';
import { Audio } from 'expo-av';
import SearchItems from "../searchItems.json"
import globalStyles from '../style/globalStyles';



const SoloScreen = ({ navigation, route }) => {
  let selectedDiff = route.params
  
  const [checkboxes, setCheckboxes] = useState(generateCheckboxes());
  const [sound, setSound] = useState();
  
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../sounds/click2.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);


  
function generateCheckboxes() {
  const numberOfCheckboxes = Number(selectedDiff.selectedDiff) // Random number of checkboxes (1 to 5)
  const checkboxesArray = Array.from({ length: numberOfCheckboxes }, (_, index) => ({
    id: `checkbox_${index}`,
    checked: false,
  }));
  return checkboxesArray;
}

const handleCheckboxToggle = (checkboxId) => {
  playSound()
  console.log(checkboxId)
  setCheckboxes((prevCheckboxes) =>
    prevCheckboxes.map((checkbox) =>
      checkbox.id === checkboxId ? { ...checkbox, checked: !checkbox.checked } : checkbox,
    )
  );
};

const allChecked = checkboxes.every((checkbox) => checkbox.checked);

// Navigate to a different screen when all checkboxes are checked
if (allChecked) {
  navigation.navigate('Win' ); // Replace 'DifferentScreen' with the actual screen name
}



return (
  <View style={[globalStyles.container]}>
    {checkboxes.map((checkbox) => (
      
        <Card 
      onPress={() => handleCheckboxToggle(checkbox.id)} 
          key={checkbox.id}
          status={checkbox.checked ? 'checked' : 'unchecked'}
          style={[
            globalStyles.card,
            checkbox.checked && globalStyles.clickedCard // Apply clicked style if isClicked is true
          ]}
        >


          <Card.Content 
          style={{ justifyContent: "center",}}>
            <Text style={globalStyles.text}>{SearchItems[checkbox.id.split('_')[1]]}</Text>
          </Card.Content>
        </Card>

    ))}
  </View>
);
};




export default SoloScreen;