import React, { useState } from "react";
import { StyleSheet, Image, View, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ListItem, ListItemSeparator } from "../components/lists";
import colors from "../config/colors";
import Icon from "../components/Icon";
import routes from "../navigations/routes";
import Screen from "../components/Screen.js";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

const menuItems = [
  {
    title: "Medical Record",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Medications",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
  {
    title: "Appointments",
    icon: {
      name: "solid",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];
const PatientInfoScreen = ({ navigation }) => {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="Patient Information"
          subTitle="Patient Name"
          image={require("../assets/profile.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>

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
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default PatientInfoScreen;
