import React from 'react';
import { View, Button, Text } from 'react-native';

const WinScreen = ({ navigation }) => {
  return (
    <View>
        <Text>

        Win Screen
        </Text>
      <Button
        title="You won"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default WinScreen;