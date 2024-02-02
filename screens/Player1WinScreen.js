import React from 'react';
import { View, Button, Text } from 'react-native';

const Player1WinScreen = ({ navigation }) => {
  return (
    <View>
        <Text>

        Player 1 Wins !!!
        </Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Player1WinScreen;