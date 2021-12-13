import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ListItem, ListItemSeparator } from "../components/lists";
import Card from "../components/Card";
import colors from "../config/colors";
// import Icon from "../components/Icon";
// import routes from "../navigations/routes";
import Screen from "../components/Screen.js";
import AppButton from "../components/AppButton";
import AuthContext from "../auth/context";
import {getPatientByID} from "../api/patientApi";
import { getUpcomingAppointment } from "../api/appointmentApi";
// const menuItems = [
//   {
//     title: "My Patient",
//     icon: {
//       name: "format-list-bulleted",
//       backgroundColor: colors.primary,
//     },
//   },
// ];

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
  {
    id: 1,
    title: "Patient 3",
    condition: "Headache",
    image: require("../assets/patient.png"),
  },
  {
    id: 1,
    title: "Patient 4",
    condition: "Headache",
    image: require("../assets/patient.png"),
  },
];
const getPatientName = async (patientId) => {
  const result = await getPatientByID(patientId);
  return result.patient_name
};

const HomeScreen = ({ navigation }) => {
  const [PID, setPID] = useState([]);
  const [listings, setListings] = useState([])

  useEffect(() => {

    const fetchListings = async () => {
      const appointments = await getUpcomingAppointment()
      const patientNames = await Promise.all(appointments.map(({patient_id}) => getPatientName(patient_id)))

      const result = appointments.map(({appointment_id, patient_id, appointment_day, appointment_descripton}, index) => ({
        appointment_id, patient_id, appointment_day, appointment_descripton, patient_name: patientNames[index]
      }))
      setListings(result)
    }

    fetchListings();
  }, []);

  const { user, setUser } = useContext(AuthContext);
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title={user.id}
          subTitle={user.name}
          image={require("../assets/profile.png")}
        />
      </View>
      <View style={styles.container}>
        {/* <FlatList
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
        /> */}
      </View>
      {/* <View>
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
      </View> */}
      <View>
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.appointment_id.toString()}
          horizontal={true}
          renderItem={({ item }) => (
            <Card
              title={item.patient_name}
              subTitle={"Condition: " + item.appointment_descripton}
              image={require("../assets/patient.png")}
            />
          )}
        />
      </View>
      {/* <Text>{response.data}</Text> */}
      {/* <AppButton title="Go to LoginScreen" onPress={handlegetPatientByID} /> */}
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
