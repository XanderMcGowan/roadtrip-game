import React, {useEffect, useState} from "react";
import { View, Text, Pressable, StyleSheet, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
const ButtonRouteParams = (props) => {
    const [sound, setSound] = useState();
  let selectedDiff = props.selectedDiff
  let selectedNum = props.selectedNum
  const navigation = useNavigation();
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../sounds/click2.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const handlePress = (destination) => {
    playSound()
    // Animate button press
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.92,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 80,
        useNativeDriver: true,
      }),
    ]).start();

      setTimeout(() => {
        navigation.navigate(destination, {selectedDiff, selectedNum});
        }, 80);
    

  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.button, { transform: [{ scale: scaleAnim }] }]}
      >
        <Pressable
          style={styles.buttonBase}
          onPress={() => handlePress(props.dest)}
        >
          <View style={styles.buttonTop}>
            <Text style={styles.buttonText}>{props.dest}</Text>
          </View>
        </Pressable>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "blue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height:'75%',
  },
  buttonBase: {
    // height: "120%",
    backgroundColor: "#E0E1DE",
    borderWidth: 4, // Border width
    borderColor: "#0c0f14", // Border color
    borderRadius: 10,
  },
  buttonTop: {
    margin: "1.5%",
    backgroundColor: "#157264",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: "1%",
  },
  buttonText: {
    marginLeft:'8%',
    marginRight:'8%',
    color: "white",
    fontSize: 42,
    fontFamily: "Caveat_400Regular" 
  },
});

export default ButtonRouteParams;
