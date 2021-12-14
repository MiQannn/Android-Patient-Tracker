import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { ListItem } from "../components/lists";
import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen.js";
// import AppText from "../components/AppText";
import AuthContext from "../auth/context";
import { getPatientByID } from "../api/patientApi";
import { getUpcomingAppointment } from "../api/appointmentApi";
import { getTreatment } from "../api/treatmentApi";

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
      const patientIds = appointments.map(({ patient_id }) => patient_id);
      const uniquePatientIds = Array.from(new Set(patientIds));
      const temp_patients = [];

      const getData = uniquePatientIds.map(async (patientId) => {
        const patientInfo = await getPatientByID(patientId);
        const treatmentsInfo = await getTreatment(patientId);

        temp_patients.push({
          patientId,
          patientName: patientInfo.patient_name,
          patientAge: patientInfo.patient_age,
          patientSSN: patientInfo.patient_ssn,
          medicalHistory: patientInfo.medical_history,

          treatments: treatmentsInfo.map((treatment) => ({
            // treatments là list nhe
            treatmentId: treatment.treatment_id,
            patientStatus: treatment.patient_status,
            patientDiagnosis: treatment.patient_diagnosis,
            medicine: treatment.medicine,
            treatmentDay: treatment.treatment_day,
            cost: treatment.cost,
          })),
        });
      });
      await Promise.all(getData);
      setPatients(temp_patients);
      const temp_treatments = temp_patients
        .filter(({ treatments }) => treatments.length > 0)
        .map(({ patientName, treatments }) => {
          return { ...treatments[0], patientName };
        }); // lấy treatment đầu tiên
      setTreatments(temp_treatments);

      const appointmentsWithName = appointments.map(
        ({
          appointment_id,
          patient_id,
          appointment_day,
          appointment_descripton,
        }) => ({
          appointment_id,
          patient_id,
          appointment_day,
          appointment_descripton,
          patient_name: temp_patients.find(
            (patient) => patient.patientId === patient_id
          ).patientName,
        })
      );
      console.log(appointmentsWithName);
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

      {/*  */}

      <View style={styles.container}>
        {/* <AppText>Appointment List</AppText> */}
        <FlatList
          data={appointments}
          keyExtractor={(listing) => listing.appointment_id.toString()}
          horizontal={true}
          renderItem={({ item }) => (
            <Card
              title={"Appointment ID: " + item.appointment_id}
              subTitle={"Patient Name: " + item.patient_name}
              subTitle2={"Appointment Day: " + item.appointment_day}
              subTitle3={"Description: " + item.appointment_descripton}
              // image={require("../assets/patient.png")}
            />
          )}
        />
      </View>

      {/*  patientlist */}

      <View>
        {/* <AppText>PatientList</AppText> */}
        <FlatList
          data={patients}
          keyExtractor={(patient) => patient.patientId.toString()}
          horizontal={true}
          renderItem={({ item }) => (
            <Card
              title={item.patientName}
              subTitle={"Age: " + item.patientId}
              subTitle2={"SSN: " + item.patientSSN}
              subTitle3={"Medical History: " + item.medicalHistory}
            />
          )}
        />
      </View>
      {/* Treatment List */}
      <View>
        <FlatList
          data={treatments}
          keyExtractor={(treatment) => treatment?.treatmentId?.toString()}
          horizontal={true}
          renderItem={({ item }) => (
            <Card
              title={"Treatment ID: " + item.treatmentId}
              subTitle={"Patient Name: " + item.patientName}
              subTitle2={"Patient Status: " + item.patientStatus}
              subTitle3={"Diagnosis: " + item.patientDiagnosis}
              subTitle4={"Medicine: " + item.medicine}
              subTitle5={"TreatmentDay: " + item.treatmentDay}
              subTitle6={"Cost: " + item.cost + " VND"}
            />
          )}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 0,
  },
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 2,
  },
});

export default HomeScreen;
