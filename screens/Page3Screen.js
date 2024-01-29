import React from 'react';
import { View, Button, Text } from 'react-native';

const Page3Screen = ({ navigation }) => {
  return (
    <View>
        <Text>


        <h1>Page 3</h1>
        </Text>
      <Button
        title="Go to Home Page"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Page3Screen;