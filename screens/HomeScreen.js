import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { useFonts, Overpass_400Regular } from "@expo-google-fonts/overpass";
import SignButton from "../components/SignButton.js";
import ButtonRouteParams from "../components/ButtonRouteParams.js";

const HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    Overpass_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <SafeAreaView style={[styles.containerHome]}>
      <ImageBackground
        source={require("../images/home-bg.jpg")}
        style={[styles.backgroundImage]}
      >
        <View
        style={[styles.container, {flex: 1}]}
        >


        <View
          style={{
            backgroundColor: "#E0E1DE",
            height: "40%",
            width: "60%",
            borderWidth: 4, 
            borderColor: "#0c0f14", 
            borderRadius: 10,
          }}
        >
          <View
            style={{
              margin: "1.5%",
              backgroundColor: "#157264",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              padding: "1%",
            }}
          >
            <Text style={[styles.text, { fontSize: 42 }]}>
              Road Trip Game
            </Text>
          </View>
        </View>
        </View>

        <View style={[styles.container]}>
          <ButtonRouteParams 
          dest={"Play"}
          selectedDiff = {"medium"}
          selectedNum = {4}
          ></ButtonRouteParams>
          <SignButton dest={"Settings"}></SignButton>
          <SignButton dest={"How To Play"}></SignButton>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};


const styles = 

StyleSheet.create({
    backgroundImage: {
        flex: 1,
        // resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        // zIndex:'-1'
      },

      button: {
        textAlign: 'center',
        height: '12%',
        width:'50%',
        marginBottom: "2%", 
        borderWidth: 4, // Border width
        borderColor: '#0c0f14', // Border color
        backgroundColor: 'white'

      },

      buttonLabelStyle: {
        fontSize: 18, 
        fontFamily: "Overpass_400Regular" 
      },

      container: {
        // backgroundColor:'red',
        width: '100%',
        // paddingTop: '80%',
        // marginBottom:'10%',
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        // flexDirection: "column",
        // flexWrap: "wrap",
        // borderWidth: 5, // Border wi
        // borderColor: 'black', // Border color
      },
    
    
    containerHome:{
        flexDirection: "column",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    
      },

      text: {
        textAlign: 'center', 
        fontFamily: 'Overpass_400Regular',
        fontSize: 32,
        color: 'white',
      },

})

export default HomeScreen;
