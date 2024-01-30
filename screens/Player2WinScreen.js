import React from 'react';
import { View, Button, Text } from 'react-native';

const Player2WinScreen = ({ navigation }) => {
  return (
    <View>
        <Text>

        <h1>Player 2 Wins</h1>
        </Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Player2WinScreen;