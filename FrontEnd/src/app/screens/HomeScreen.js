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
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [treatments, setTreatments] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const appointments = await getUpcomingAppointment();
      const patientIds = appointments.map(({patient_id}) => patient_id)
      const uniquePatientIds = Array.from(new Set(patientIds))
      const temp_patients = [];

      const getData = uniquePatientIds.map(async (patientId) => {
        const patientInfo = await getPatientByID(patientId)
        const treatmentsInfo = await getTreatment(patientId)

        temp_patients.push({
          patientId,
          patientName: patientInfo.patient_name,
          patientAge: patientInfo.patient_age,
          patientSSN: patientInfo.patient_ssn,
          medicalHistory: patientInfo.medical_history,

          treatments: treatmentsInfo.map((treatment) => ({ // treatments là list nhe
            treatmentId: treatment.treatment_id,
            patientStatus: treatment.patient_status,
            patientDiagnosis: treatment.patient_diagnosis,
            medicine: treatment.medicine,
            treatmentDay: treatment.treatment_day,
            cost: treatment.cost,
          }))
        })
      })
      await Promise.all(getData);
      setPatients(temp_patients);
      const temp_treatments = temp_patients.filter(({treatments}) => treatments.length > 0).map(({patientName, treatments}) => {
        return {...treatments[0], patientName}
      }) // lấy treatment đầu tiên
      setTreatments(temp_treatments);

      const appointmentsWithName = appointments.map(
        (
          {
            appointment_id,
            patient_id,
            appointment_day,
            appointment_descripton,
          }
        ) => ({
          appointment_id,
          patient_id,
          appointment_day,
          appointment_descripton,
          patient_name: temp_patients.find((patient) => patient.patientId === patient_id).patientName,
        })
      );
      console.log(appointmentsWithName)
      setAppointments(appointmentsWithName);
    };


    fetchData();
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
          data={appointments}
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
          data={patients}
          keyExtractor={(patient) => patient.patientId.toString()}
          horizontal={true}
          renderItem={({ item }) => (
            <Card
              title={item.patientName}
              subTitle={"ID:" + item.patientId}
              image={require("../assets/patient.png")}
            />
          )}
        />
      </View>
      {/* cai nay tinh lam cho cai Treatment List */}
      <View>
        <FlatList
          data={treatments}
          keyExtractor={(treatment) => treatment?.treatmentId?.toString()}
          horizontal={true}
          renderItem={({ item }) => (
            <Card
              title={item.patientName}
              subTitle={"Diagnosis: " + item.patientDiagnosis}
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
