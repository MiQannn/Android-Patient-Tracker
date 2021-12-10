import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen.js";

import { registerPatient } from "../api/patientApi";
const patientValidationSchema = Yup.object().shape({
  patientName: Yup.string().required().min(1).label("Patient Name"),
  patientAge: Yup.number().required().min(1).max(100).label("Age"),
  patientSSN: Yup.string().required().min(1).label("SSN"),
  medicalHistory: Yup.string().label("Medical History"),
});

const PatientInputScreen = ({ navigation }) => {
  const patientHandleSubmit = async (values, actions) => {
    let patientResult = undefined;
    try {
      patientResult = await registerPatient(
        values.patientName,
        values.patientAge,
        values.patientSSN,
        values.medicalHistory
      );
      // resetForm();
      // authContext.setUser(result);
      alert(patientResult);
      // resetForm();
    } catch {
      resetForm();
      return alert("Wrong patientInput");
    }
  };
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          patientName: "",
          patientAge: "",
          patientSSN: "",
          medicalHistory: "",
          // category: null,
        }}
        onSubmit={patientHandleSubmit}
        validationSchema={patientValidationSchema}
      >
        <AppFormField
          maxLength={255}
          name="patientName"
          placeholder="Patient Name"
        />
        <AppFormField
          keyboardType="numeric"
          maxLength={3}
          name="patientAge"
          placeholder="Age"
        />
        <AppFormField maxLength={255} name="patientSSN" placeholder="SSN" />
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
        {/* <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
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
  container: {
    padding: 10,
  },
});

export default PatientInputScreen;
