import React, { useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import globalStyles from '../style/globalStyles';

const HowToPlayScreen = ({ navigation }) => {
  
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
      setIsPressed(true);

  };

  const handlePressOut = () => {
      setIsPressed(false);
  };
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.text}>


        How to Play
        </Text>
        <View style={globalStyles.container}>
          <Text style={globalStyles.buttonText}>

        This is how you play the game. look outside for the objects. select the items that you see. versus mode: first player to see everything and select the correct boxes wins.
          </Text>
        </View>
        <Pressable
        style={[globalStyles.button, isPressed && globalStyles.buttonPressed, {alignItems: 'flex-end'}]}
        title="Home"
        onPress={() => navigation.navigate("Home")}
        onPressIn={() => handlePressIn()}
        onPressOut={() => handlePressOut()}
        activeOpacity={0.7}
      >
        <Text style={globalStyles.text}>Home</Text>
      </Pressable>
    </View>
  );
};

export default HowToPlayScreen;