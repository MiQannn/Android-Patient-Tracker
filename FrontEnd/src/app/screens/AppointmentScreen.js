import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Screen from "../components/Screen.js";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  // AppFormPicker,
  SubmitButton,
} from "../components/forms";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
  patientId: Yup.string().required().min(1).label("Patient Status"),
  appointmentDay: Yup.date()
    .required()
    .min(1)
    .max(10000)
    .label("Treatment Day"),
  appointmentDescription: Yup.string()
    .required()
    .min(1)
    .label("Patient Diagnosis"),

  // medicine: Yup.string().required().min(1).label("Medicine"),

  // cost: Yup.number().required().min(1).max(10000).label("Cost"),
  // medicalHistory: Yup.string().label("Medical History"),
  // category: Yup.object().required().nullable().label("Category"),
});
const AppointmentScreen = ({ navigation }) => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          patientId: "",
          appointmentDay: "",
          appointmentDescription: "",

          // category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          maxLength={255}
          name="patientId"
          placeholder="Patient Id"
        />
        <AppFormField
          maxLength={255}
          name="appointmentDay"
          placeholder="Appointment Day"
        />
        <AppFormField
          maxLength={255}
          name="appointmentDescription"
          placeholder="Appointment Description"
        />
        {/* <AppFormField
          keyboardType="numeric"
          maxLength={3}
          name="treatmentDay"
          placeholder="Treatment Day"
        />
        <AppFormField
          keyboardType="numeric"
          maxLength={3}
          name="cost"
          placeholder="Cost"
        /> */}
        {/* <AppFormField maxLength={255} name="ssn" placeholder="SSN" /> */}
        {/* <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        /> */}
        {/* <AppFormField
          maxLength={255}
          multiline
          name="medicalHistory"
          numberOfLines={3}
          placeholder="Medical History"
        /> */}
        <SubmitButton title="Submit" />
      </AppForm>

      {/* <AppButton
        title="Go to PatientInput"
        onPress={() => navigation.navigate("PatientInput")}
      /> */}
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

export default AppointmentScreen;
