import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Screen from "../components/Screen.js";
import AppButton from "../components/AppButton";
const HomeScreen = ({ navigation }) => {
  return (
    <Screen>
      <AppButton
        title="Go to LoginScreen"
        onPress={() => navigation.navigate("Login")}
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

export default HomeScreen;
