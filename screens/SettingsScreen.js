import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import ButtonRouteParams from "../components/ButtonRouteParams";
import { Audio } from "expo-av";

const SettingScreen = ({ navigation }) => {
  const [selectedVersus, setSelectedVersus] = useState("Play");
  const [selectedDiff, setSelectedDiff] = useState("easy");
  const [selectedNum, setSelectedNum] = useState("4");
  const [elementVisible, setElementVisible] = useState(true);
  const [sound, setSound] = useState();

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

  const handleVersus = (option) => {
    playSound();
    if (option === "Versus") {
      setSelectedNum('4')
      setElementVisible(false);
    } else {
      setElementVisible(true);
    }
    setSelectedVersus(option);
    console.log(selectedVersus);
  };

  const handleDiff = (option) => {
    playSound();
    setSelectedDiff(option);

    console.log(selectedDiff);
  };

  const handleNum = (option) => {
    playSound();
    setSelectedNum(option);
    console.log(selectedNum);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ImageBackground
        source={require("../images/settings-bg.jpg")}
        style={{
          flex: 1,
          // resizeMode: 'cover',
          justifyContent: "center",
          width: "100%",
          height: "100%",
          alignItems: "center",
          zIndex: -1,
        }}
      >
        <View style={styles.main}>
          <Text
            style={[
              styles.buttonText,
              { color: "black", fontSize: 24, marginTop: "4%" },
            ]}
          >
            VERSUS
          </Text>
          <View style={styles.container}>
            <Pressable
              onPress={() => handleVersus("Play")}
              style={[
                styles.buttonBase,
                selectedVersus === "Play" && styles.selected,
              ]}
            >
              <View style={[styles.buttonTop]}>
                <Text style={[styles.buttonText]}>Solo</Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => handleVersus("Versus")}
              style={[
                styles.buttonBase,
                selectedVersus === "Versus" && styles.selected,
              ]}
            >
              <View style={[styles.buttonTop, { backgroundColor: "#CA5940" }]}>
                <Text style={[styles.buttonText]}>Versus</Text>
              </View>
            </Pressable>
          </View>
          <Text style={[styles.buttonText, { color: "black", fontSize: 24 }]}>
            DIFFICULTY
          </Text>
          <View style={styles.container}>
            <Pressable
              onPress={() => handleDiff("easy")}
              style={[
                styles.buttonBase,
                selectedDiff === "easy" && styles.selected,
              ]}
            >
              <View style={[styles.buttonTop]}>
                <Text style={[styles.buttonText]}>Easy</Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => handleDiff("medium")}
              style={[
                styles.buttonBase,
                selectedDiff === "medium" && styles.selected,
              ]}
            >
              <View style={[styles.buttonTop, { backgroundColor: "#F9D45F" }]}>
                <Text style={[styles.buttonText]}>Medium</Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => handleDiff("hard")}
              style={[
                styles.buttonBase,
                selectedDiff === "hard" && styles.selected,
              ]}
            >
              <View style={[styles.buttonTop, { backgroundColor: "#CA5940" }]}>
                <Text style={[styles.buttonText]}>Hard</Text>
              </View>
            </Pressable>
          </View>
          <Text style={[styles.buttonText, { color: "black", fontSize: 24 }]}>
            NUMBER OF ITEMS
          </Text>
          <View style={styles.container}>
            <Pressable
              onPress={() => handleNum("2")}
              style={[
                styles.buttonBase,
                selectedNum === "2" && styles.selected,
              ]}
            >
              <View style={[styles.buttonTop]}>
                <Text style={[styles.buttonText]}>2</Text>
              </View>
            </Pressable>

            <Pressable
              onPress={() => handleNum("4")}
              style={[
                styles.buttonBase,
                selectedNum === "4" && styles.selected,
              ]}
            >
              <View style={[styles.buttonTop, { backgroundColor: "#F9D45F" }]}>
                <Text style={[styles.buttonText]}>4</Text>
              </View>
            </Pressable>

            {elementVisible ? (
              <Pressable
                onPress={() => handleNum("6")}
                style={[
                  styles.buttonBase,
                  selectedNum === "6" && styles.selected,
                ]}
              >
                <View
                  style={[styles.buttonTop, { backgroundColor: "#C96C40" }]}
                >
                  <Text style={[styles.buttonText]}>6</Text>
                </View>
              </Pressable>
            ) : null}

            {elementVisible ? (
              <Pressable
                onPress={() => handleNum("8")}
                style={[
                  styles.buttonBase,
                  selectedNum === "8" && styles.selected,
                ]}
              >
                <View
                  style={[styles.buttonTop, { backgroundColor: "#D7573A" }]}
                >

                 <Text style={[styles.buttonText]}>8</Text>
                </View>
              </Pressable>
            ) : null}
          </View>
        </View>
        <View
          style={{
            height: "15%",
          }}
        >
          <ButtonRouteParams
            dest={selectedVersus}
            selectedDiff={selectedDiff}
            selectedNum={selectedNum}
          ></ButtonRouteParams>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "95%",
    marginTop: "25%",
    marginBottom: "10%",
    flex: 1,
    backgroundColor: "rgba(182, 216, 246, 0.5)",

    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    margin: "10%",
    height: "5%",
    width: "85%",
    // backgroundColor: "blue",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: "75%",
  },
  buttonBase: {
    marginRight: "1.5%",
    marginLeft: "1.5%",
    backgroundColor: "#E0E1DE",
    borderWidth: 4,
    borderColor: "#0c0f14",
    borderRadius: 10,
    opacity: 0.5,
  },
  buttonTop: {
    margin: "2%",
    backgroundColor: "#157264",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: "1.5%",
  },
  buttonText: {
    marginLeft: "6%",
    marginRight: "6%",
    color: "white",
    fontSize: 18,
    fontFamily: "Overpass_400Regular",
  },
  selected: {
    opacity: 1,
  },
});

export default SettingScreen;
