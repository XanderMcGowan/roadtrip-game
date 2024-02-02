import React from 'react';
import { View, Button, Text } from 'react-native';

const HowToPlayScreen = ({ navigation }) => {
  return (
    <View>
        <Text>


        How to Play
        </Text>
      <Button
        title="Go to Home Page"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default HowToPlayScreen;