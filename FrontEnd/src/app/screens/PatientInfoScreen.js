import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Screen from "../components/Screen.js";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
const PatientInfoScreen = ({ navigation }) => {
  return (
    <Screen>
      <AppButton
        title="Go to MedicalInputScreen"
        onPress={() => navigation.navigate("MedicalInput")}
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

export default PatientInfoScreen;
