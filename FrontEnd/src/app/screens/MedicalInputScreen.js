import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen.js";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
  patientStatus: Yup.string().required().min(1).label("Patient Status"),
  patientDiagnosis: Yup.string().required().min(1).label("Patient Diagnosis"),
  medicine: Yup.string().required().min(1).label("Medicine"),
  treatmentDay: Yup.date().required().min(1).max(10000).label("Treatment Day"),
  cost: Yup.number().required().min(1).max(10000).label("Cost"),

});


const MedicalInputScreen = ({ navigation }) => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          patientId:"",
          patientStatus: "",
          patientDiagnosis: "",
          medicine: "",
          treatmentDay: "",
          cost: "",
         
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
          // keyboardType="numeric"
          maxLength={3}
          name="treatmentDay"
          placeholder="Treatment Day"
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
