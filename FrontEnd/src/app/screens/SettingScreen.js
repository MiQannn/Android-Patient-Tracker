import React, { useState, useContext } from "react";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ListItem } from "../components/lists";
import Icon from "../components/Icon";
import Screen from "../components/Screen.js";
import AuthContext from "../auth/context";
import AppButton from "../components/AppButton";
const SettingScreen = ({ navigation }) => {
  const { setUser } = useContext(AuthContext);
  return (
    <Screen>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => setUser(null)}
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
