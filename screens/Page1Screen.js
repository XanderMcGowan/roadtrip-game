import React, {useState} from 'react';
import { View, Button, Text, CheckBox } from 'react-native';


const Page1Screen = ({ navigation }) => {

  const [isChecked, setChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setChecked(!isChecked);
    if (!isChecked) {
      navigation.navigate('Page2');
    }
  };


  return (
    <View>
        <Text>

        <h1>Game Screen</h1>
        </Text>
        <CheckBox value={isChecked} onValueChange={handleCheckBoxChange} />
      {/* <Button
        title="Go to Page 2"
        onPress={() => navigation.navigate('Page2')}
      /> */}
    </View>
  );
};

export default Page1Screen;