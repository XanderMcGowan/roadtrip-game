import React from "react";
import { useRef, useEffect } from "react";
import { View, Animated, Image, Text } from "react-native";
const LogoScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0.1,
      duration: 4000, // Adjust the duration of the fade animation
      useNativeDriver: true,
    }).start(() => {
      // Navigate to the home screen after the animation completes
      navigation.navigate("Home");
    });
  }, [fadeAnim, navigation]);

  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        opacity: fadeAnim,
      }}
    >
      <Image
        source={require("../images/logo.png")}
        style={{
          flex: 1,
          // resizeMode: 'cover',
          justifyContent: "center",
          width: "100%",
          height: "100%",
          alignItems: "center",
          }}
      />
    </Animated.View>
  );
};

export default LogoScreen;
