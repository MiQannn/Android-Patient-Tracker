import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ListItem, ListItemSeparator } from "../components/lists";
import Card from "../components/Card";
import colors from "../config/colors";
import Icon from "../components/Icon";
import routes from "../navigations/routes";
import Screen from "../components/Screen.js";
import AppButton from "../components/AppButton";

const menuItems = [
  {
    title: "My Patient",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  // {
  //   title: "My ???",
  //   icon: {
  //     name: "email",
  //     backgroundColor: colors.secondary,
  //   },
  //   targetScreen: routes.MESSAGES,
  // },
];

const listings = [
  {
    id: 1,
    title: "Patient 1",
    condition: "Headache",
    image: require("../assets/patient.png"),
  },
  {
    id: 2,
    title: "Patient 2",
    condition: "Broken leg",
    image: require("../assets/examination.png"),
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="Personal Name"
          subTitle="Occupation "
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
      <View>
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          horizontal={true}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"Condition: " + item.condition}
              image={item.image}
            />
          )}
        />
      </View>

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
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default HomeScreen;
