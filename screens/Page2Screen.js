import React from 'react';
import { View, Button, Text } from 'react-native';

const Page2Screen = ({ navigation }) => {
  return (
    <View>
        <Text>

        <h1>Page 2</h1>
        </Text>
      <Button
        title="You won"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Page2Screen;