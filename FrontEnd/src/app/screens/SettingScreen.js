import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ListItem } from "../components/lists";
import Icon from "../components/Icon";
import Screen from "../components/Screen.js";
import AppButton from "../components/AppButton";
const SettingScreen = ({ navigation }) => {
  return (
    <Screen>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
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
