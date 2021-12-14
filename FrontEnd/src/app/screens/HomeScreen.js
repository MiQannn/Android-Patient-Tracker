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
import { getPatientByID } from "../api/patientApi";
import { getUpcomingAppointment } from "../api/appointmentApi";
import { getTreatment } from "../api/treatmentApi";
// const menuItems = [
//   {
//     title: "My Patient",
//     icon: {
//       name: "format-list-bulleted",
//       backgroundColor: colors.primary,
//     },
//   },
// ];

const getPatientName = async (patientId) => {
  const result = await getPatientByID(patientId);
  return result.patient_name;
};

const HomeScreen = ({ navigation }) => {
  const [PID, setPID] = useState([]);
  const [listings, setListings] = useState([]);
  const [patient, setPatient] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const appointments = await getUpcomingAppointment();

      const patientNames = await Promise.all(
        appointments.map(({ patient_id }) => getPatientName(patient_id))
      );

      const result = appointments.map(
        (
          {
            appointment_id,
            patient_id,
            appointment_day,
            appointment_descripton,
          },
          index
        ) => ({
          appointment_id,
          patient_id,
          appointment_day,
          appointment_descripton,
          patient_name: patientNames[index],
        })
      );
      setListings(result);
    };

    const fetchListingsPatient = async () => {
      const treatments = await getTreatment();
      const patientNamesforTreatment = await Promise.all(
        treatments.map(({ patient_id }) => getPatientName(patient_id))
      );

      const resultTreatment = treatments.map(
        (
          {
            treatment_id,
            patient_id,
            doctor_id,
            patient_status,
            patient_diagnosis,
            medicine,
            treatment_day,
            cost,
          },
          index
        ) => ({
          treatment_id,
          patient_id,
          doctor_id,
          patient_status,
          patient_diagnosis,
          medicine,
          treatment_day,
          cost,
          patient_name: patientNamesforTreatment[index],
        })
      );
      setPatient(resultTreatment);
    };

    fetchListings();
    fetchListingsPatient();
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

      {/* cai nay la listing cua appointment */}

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

      {/* cai nay tinh lam cho cai patientlist */}

      <View>
        <FlatList
          data={patient}
          keyExtractor={(patient) => patient.treatment_id.toString()}
          horizontal={true}
          renderItem={({ item }) => (
            <Card
              title={item.patient_name}
              subTitle={"Diagnosis: " + item.patient_diagnosis}
              image={require("../assets/patient.png")}
            />
          )}
        />
      </View>
      {/* cai nay tinh lam cho cai Treatment List */}
      <View>
        <FlatList
          data={patient}
          keyExtractor={(patient) => patient.treatment_id.toString()}
          horizontal={true}
          renderItem={({ item }) => (
            <Card
              title={item.patient_name}
              subTitle={"Diagnosis: " + item.patient_diagnosis}
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
