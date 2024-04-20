import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import globalStyles from '../style/globalStyles';
import { Button } from 'react-native-paper';
import SignButton from '../components/SignButton';

const HowToPlayScreen = ({ navigation }) => {
  
  return (

 <ImageBackground
        source={require('../images/howto-bg.jpg')}
        style={{
          flex: 1,
          // resizeMode: 'cover',
          justifyContent: "center",
          width: "100%",
          height: "100%",
          alignItems: "center",
          zIndex:-1
        }}>
          <View
            style={{
              borderRadius: 10,
              marginTop:"10%",
              backgroundColor: 'rgba(90, 127, 159, 0.8)',
              height:'70%',
              width:'80%',
            }}
          >
            
            <Text
            style={{
              marginTop: '10%',
              flex:1,
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center', 
              fontFamily: 'Overpass_400Regular',
              fontSize: 32,
              color: 'white',
            }}
            > SOLO:
            
            Search for the generated items outside of the car. Once found tap the item to gray it out. You win once all items are selected.
            
            VERSUS: Both players play on the same screen. First person to find all items wins.
            </Text>
          </View>
          <SignButton
          dest={"Home"}
          ></SignButton>
        </ImageBackground>
  );
};

export default HowToPlayScreen;