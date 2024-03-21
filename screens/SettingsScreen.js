import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Button } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";

import globalStyles from "../style/globalStyles";

const DropdownMenu = () => {
  const [selectedVersus, setSelectedVersus] = useState("solo");
  const [selectedDiff, setSelectedDiff] = useState("2");
  const [showDropDown, setShowDropDown] = useState(false);
  const [showDropDown2, setShowDropDown2] = useState(false);
  const playTypeList = [
    {
      label: "Solo",
      value: "solo",
    },
    {
      label: "Versus",
      value: "versus",
    },
  ];

  const diffList = [
    {
      label: "Easy",
      value: "2",
    },
    {
      label: "Medium",
      value: "4",
    },
    {
      label: "Hard",
      value: "8",
    },
  ];

  return {
    selectedVersus,
    selectedDiff,
    render: (
      <SafeAreaView>
        <View style={{ marginBottom: "5%" }}>
          <DropDown
            label={"Play Type"}
            mode={"flat"}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={selectedVersus}
            setValue={setSelectedVersus}
            list={playTypeList}
          />
        </View>
        <DropDown
          style={{ marginBottom: "5%" }}
          label={"Difficulty"}
          mode={"flat"}
          visible={showDropDown2}
          showDropDown={() => setShowDropDown2(true)}
          onDismiss={() => setShowDropDown2(false)}
          value={selectedDiff}
          setValue={setSelectedDiff}
          list={diffList}
        />
      </SafeAreaView>
    ),
  };
};

const SettingScreen = ({ navigation }) => {
  const { render, selectedVersus, selectedDiff } = DropdownMenu();

  const handlePageNav = () => {
    if (selectedVersus == "versus") {
      navigation.navigate("Versus", { selectedDiff });
    } else {
      navigation.navigate("Solo", { selectedDiff });
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      {render}
      <Button
        style={{ marginBottom: "5%" }}
        mode="elevated"
        uppercase="true"
        labelStyle={{ fontSize: 18, fontFamily: "Caveat_400Regular" }}
        onPress={() => handlePageNav()}
      >
        Play
      </Button>
      <Button
        mode="elevated"
        uppercase="true"
        labelStyle={{ fontSize: 18, fontFamily: "Caveat_400Regular" }}
        onPress={() => navigation.navigate("Home")}
      >
        Home
      </Button>
    </SafeAreaView>
  );
};

export default SettingScreen;
