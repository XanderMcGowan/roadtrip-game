import React, { useState } from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../style/globalStyles';
import { Button } from 'react-native-paper';

const HowToPlayScreen = ({ navigation }) => {
  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={globalStyles.text}>


        How to Play
        </Text>
          <Text style={globalStyles.buttonText}>

        This is how you play the game. look outside for the objects. select the items that you see. versus mode: first player to see everything and select the correct boxes wins.
          </Text>
        <Button
        mode="elevated"
        uppercase="true"
        labelStyle={{ fontSize: 18, fontFamily: "Caveat_400Regular" }}
        onPress={() => navigation.navigate("Home")}
      >
        Home
      </Button>
    </View>
  );
};

export default HowToPlayScreen;