
import React, { useState } from 'react';
import { View, Button, Picker, StyleSheet, Text } from 'react-native';

const DropdownMenu = () => {
  const [selectedVersus, setSelectedVersus] = useState("solo");
  const [selectedDiff, setSelectedDiff] = useState("2");


  return {
    selectedVersus, selectedDiff,
    render:(<View style={styles.container}>
      <Text>Play Type</Text>
        <Picker
          selectedVersus={selectedVersus}
          onValueChange={(itemValue, itemIndex) => setSelectedVersus(itemValue)}
          style={styles.picker}
          >
          <Picker.Item label="Solo" value="solo" />
          <Picker.Item label="Versus" value="versus" />
        </Picker>
        <Text>Difficulty</Text>
        <Picker
          selectedDiff={selectedDiff}
          onValueChange={(itemValue) => setSelectedDiff(itemValue)}
          style={styles.picker}
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
      navigation.navigate('Page1', {selectedDiff})
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
        onPress={() => handlePageNav()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  picker: {
    width: 200,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default SettingScreen
;
