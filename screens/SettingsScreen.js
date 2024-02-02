
import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker'

import globalStyles from '../style/globalStyles';

const DropdownMenu = () => {
  const [selectedVersus, setSelectedVersus] = useState("solo");
  const [selectedDiff, setSelectedDiff] = useState("2");


  return {
    selectedVersus, selectedDiff,
    render:(<View style={globalStyles.container}>
      <Text>Play Type</Text>
        <Picker
          selectedVersus={selectedVersus}
          onValueChange={(itemValue, itemIndex) => setSelectedVersus(itemValue)}
          style={globalStyles.picker}
          >
          <Picker.Item label="Solo" value="solo" />
          <Picker.Item label="Versus" value="versus" />
        </Picker>
        <Text>Difficulty</Text>
        <Picker
          selectedDiff={selectedDiff}
          onValueChange={(itemValue) => setSelectedDiff(itemValue)}
          style={globalStyles.picker}
        >
          <Picker.Item label="Easy" value="2" />
          <Picker.Item label="Medium" value="4" />
          <Picker.Item label="Hard" value="6" />
        </Picker>
      </View>
    )
  }

};

const SettingScreen = ({ navigation } ) => {
  
  const {render, selectedVersus, selectedDiff} = DropdownMenu()


  const handlePageNav = () => {
    if(selectedVersus == "versus"){
      navigation.navigate('Versus', {selectedDiff})
    } else {
      navigation.navigate('Solo', {selectedDiff})
    }
  }
  



  return (
    <View>
      {render}
      <Button
        title="Play"
        onPress={() => handlePageNav()}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};


export default SettingScreen
;
