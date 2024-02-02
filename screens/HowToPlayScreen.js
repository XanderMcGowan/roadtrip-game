import React from 'react';
import { View, Button, Text } from 'react-native';

const HowToPlayScreen = ({ navigation }) => {
  return (
    <View>
        <Text>


        <h1>How to Play</h1>
        </Text>
      <Button
        title="Go to Home Page"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default HowToPlayScreen;