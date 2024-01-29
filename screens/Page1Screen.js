import React, {useState} from 'react';
import { View, Button, Text } from 'react-native';


const Page1Screen = ({ navigation }) => {
  const [dataGrandchild, setDataFromGrandchild] = useState('');



  return (
    <View>
        <Text>

        <h1>Page 1</h1>
        </Text>
      <Button
        title="Go to Page 2"
        onPress={() => navigation.navigate('Page2')}
      />
    </View>
  );
};

export default Page1Screen;