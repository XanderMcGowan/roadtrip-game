
import React from 'react';
import { View, Button } from 'react-native';
import DropdownMenu from '../components/DropdownMenu';

const SettingScreen = ({ navigation } ) => {
  
  return (
    <View>
      <DropdownMenu></DropdownMenu>
      <Button
        title="Play"
        onPress={() => navigation.navigate('Page1')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default SettingScreen
;
