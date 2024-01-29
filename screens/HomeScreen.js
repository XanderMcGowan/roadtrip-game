// HomeScreen.js
import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Page 1"
        onPress={() => navigation.navigate('Page1')}
      />
    </View>
  );
};

export default HomeScreen;
