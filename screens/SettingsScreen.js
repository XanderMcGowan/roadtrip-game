
import React, { useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker'

import globalStyles from '../style/globalStyles';

const DropdownMenu = () => {
  const [selectedVersus, setSelectedVersus] = useState("solo");
  const [selectedDiff, setSelectedDiff] = useState("2");



  return {
    selectedVersus, selectedDiff,
    render:(<View style={globalStyles.container}>
      <Text
              style={globalStyles.text}
      >Play Type</Text>
        <Picker
          selectedVersus={selectedVersus}
          onValueChange={(itemValue, itemIndex) => setSelectedVersus(itemValue)}
          style={globalStyles.picker}
          >
          <Picker.Item 
          
          label="Solo" 
          value="solo" />
          <Picker.Item label="Versus" value="versus" />
        </Picker>
        <Text
        style={globalStyles.text}
        >Difficulty</Text>
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
  const [isPressed1, setIsPressed1] = useState(false);
  const [isPressed2, setIsPressed2] = useState(false);

  const handlePressIn = (index) => {
    console.log(index);
    if (index == 1) {
      setIsPressed1(true);
    } else {
      setIsPressed2(true);
    } 
  };

  const handlePressOut = (index) => {
    console.log(index);
    if (index == 1) {
      setIsPressed1(false);
    } else {
      setIsPressed2(false);
    } 
  };


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
      <Pressable
        style={[globalStyles.button, isPressed1 && globalStyles.buttonPressed]}
        title="Play"
        onPress={() => handlePageNav()}
        onPressIn={() => handlePressIn(1)}
        onPressOut={() => handlePressOut(1)}
        activeOpacity={0.7}
      >
        <Text style={globalStyles.text}>
          Play
        </Text>
      </Pressable>
      <Pressable
              style={[globalStyles.button, isPressed2 && globalStyles.buttonPressed]}
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
        onPressIn={() => handlePressIn(2)}
        onPressOut={() => handlePressOut(2)}
        activeOpacity={0.7}
        >
        <Text style={globalStyles.text}>
          Home
        </Text>
      </Pressable>
    </View>
  );
};


export default SettingScreen
;
