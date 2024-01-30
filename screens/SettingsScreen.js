
import React, { useState } from 'react';
import { View, Button, Picker, StyleSheet, Text } from 'react-native';


const SettingScreen = ({ navigation } ) => {
  const [selectedDiff, setSelectedDiff] = useState("2");
  const [selectedVersus, setSelectedVersus] = useState("solo");

  const handlePageNav = () => {
    if(selectedVersus == "versus"){
      navigation.navigate('Versus')
    } else {
      navigation.navigate('Page1')
    }
  }

  const DropdownMenu = () => {
    return <View style={styles.container}>
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
          onValueChange={(itemValue, itemIndex) => setSelectedDiff(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Easy" value="2" />
          <Picker.Item label="Medium" value="4" />
          <Picker.Item label="Hard" value="6" />
        </Picker>
      </View>
  };



  return (
    <View>
      <DropdownMenu></DropdownMenu>
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
