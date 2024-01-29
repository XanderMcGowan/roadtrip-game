
import React from 'react';
import { View, Button } from 'react-native';

const SettingScreen
 = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default SettingScreen
;
