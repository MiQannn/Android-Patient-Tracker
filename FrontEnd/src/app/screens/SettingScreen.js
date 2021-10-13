import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Screen from "../components/Screen.js";
import AppButton from "../components/AppButton";
const SettingScreen = ({ navigation }) => {
  return (
    <Screen>
      <AppButton
        title="Go to PatientInput"
        onPress={() => navigation.navigate("PatientInput")}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default SettingScreen;
