import React from 'react';
import { View, Button, Text } from 'react-native';

const Player2WinScreen = ({ navigation }) => {
  return (
    <View>
        <Text>

        Player 2 Wins
        </Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Player2WinScreen;