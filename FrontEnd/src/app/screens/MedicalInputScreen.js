import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen.js";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
  patientId: Yup.string().required().min(1).label("Patient Status"),
  treatmentDay: Yup.date()
    .required()
    .min(1)
    .max(10000)
    .default(function () {
      return new Date();
    })
    .label("Treatment Day"),
  patientStatus: Yup.string().required().min(1).label("Patient Status"),
  patientDiagnosis: Yup.string().required().min(1).label("Patient Diagnosis"),
  medicine: Yup.string().required().min(1).label("Medicine"),
  cost: Yup.number().required().min(1).max(10000).label("Cost"),
});

const MedicalInputScreen = ({ navigation }) => {
  const medicalHandleSubmit = async (values, actions) => {
    let patientResult = undefined;
    try {
      patientResult = await registerPatient(
        values.patientId,
        values.treatmentDay,
        values.patientStatus,
        values.patientDiagnosis,
        values.medicine,
        values.cost
      );
      // resetForm();
      // authContext.setUser(result);
      alert(patientResult);
      // resetForm();
    } catch {
      actions.resetForm();
      return alert("Wrong patientInput");
    }
  };
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          patientId: "",
          treatmentDay: "",
          patientStatus: "",
          patientDiagnosis: "",
          medicine: "",
          cost: "",
        }}
        onSubmit={medicalHandleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          maxLength={255}
          name="patientId"
          placeholder="Patient Id"
        />
        <AppFormField
          type="date"
          // keyboardType="numeric"
          maxLength={255}
          name="treatmentDay"
          placeholder="Treatment Day - ex: 2021-03-04"
        />
        <AppFormField
          maxLength={255}
          name="patientStatus"
          placeholder="Patient Status"
        />
        <AppFormField
          maxLength={255}
          name="patientDiagnosis"
          placeholder="Patient Diagnosis"
        />
        <AppFormField maxLength={255} name="medicine" placeholder="Medicine" />

        <AppFormField
          keyboardType="numeric"
          maxLength={3}
          name="cost"
          placeholder="Cost"
        />
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

export default MedicalInputScreen;
