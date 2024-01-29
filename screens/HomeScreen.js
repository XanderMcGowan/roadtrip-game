// HomeScreen.js
import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Play"
        onPress={() => navigation.navigate('Page1')}
      />
            <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
            <Button
        title="How to Play"
        onPress={() => navigation.navigate('Page3')}
      />
    </View>
  );
};

export default HomeScreen;
