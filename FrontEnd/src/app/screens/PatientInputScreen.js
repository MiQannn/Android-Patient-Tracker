import React, { useState } from "react";
import { StyleSheet, Image, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  // AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen.js";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
  patientName: Yup.string().required().min(1).label("Patient Name"),
  age: Yup.number().required().min(1).max(10000).label("Age"),
  ssn: Yup.string().required().min(1).label("SSN"),
  medicalHistory: Yup.string().label("Medical History"),
  // category: Yup.object().required().nullable().label("Category"),
});

// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "Clothing", value: 2 },
//   { label: "Camera", value: 3 },
// ];

const PatientInputScreen = ({ navigation }) => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          patientName: "",
          age: "",
          ssn: "",
          medicalHistory: "",
          // category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          maxLength={255}
          name="patientName"
          placeholder="Patient Name"
        />
        <AppFormField
          keyboardType="numeric"
          maxLength={3}
          name="age"
          placeholder="Age"
        />
        <AppFormField maxLength={255} name="ssn" placeholder="SSN" />
        {/* <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        /> */}
        <AppFormField
          maxLength={255}
          multiline
          name="medicalHistory"
          numberOfLines={3}
          placeholder="Medical History"
        />
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
  container: {
    padding: 10,
  },
});

export default PatientInputScreen;
