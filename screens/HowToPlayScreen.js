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
    <View>
        <Text>


        How to Play
        </Text>
        <Pressable
        style={[globalStyles.button, isPressed && globalStyles.buttonPressed]}
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