import React from 'react';
import { View, Button, Text } from 'react-native';

const WinScreen = ({ navigation }) => {
  return (
    <View>
        <Text>

        <h1>Win Screen</h1>
        </Text>
      <Button
        title="You won"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default WinScreen;