import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen.js";
import { createTreatment } from "../api/treatmentApi";

const validationSchema = Yup.object().shape({
  patientId: Yup.string().required().min(1).label("Patient Id"),
  treatmentDay: Yup.date()
    .required()
    .min(1)
    .max(10000)
    .label("Treatment Day")
    .default(function () {
      return new Date();
    }),
  patientStatus: Yup.string().required().min(1).label("Patient Status"),
  patientDiagnosis: Yup.string().required().min(1).label("Patient Diagnosis"),
  medicine: Yup.string().required().min(1).label("Medicine"),
  cost: Yup.number().required().min(1).max(1000000).label("Cost"),
});

const MedicalInputScreen = () => {
  const medicalHandleSubmit = async (values, actions) => {
    let patientResult = undefined;
    try {
      patientResult = await createTreatment(
        values.patientId,
        values.treatmentDay,
        values.patientStatus,
        values.patientDiagnosis,
        values.medicine,
        values.cost
      );

      alert(patientResult);
    } catch {
      // actions.resetForm();
      return alert("Wrong patientInput");
    }
  };
  return (
    <Screen style={styles.container}>
      <ScrollView>
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
            maxLength={255}
            name="treatmentDay"
            placeholder="Treatment Day "
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
          <AppFormField
            maxLength={255}
            name="medicine"
            placeholder="Medicine"
          />

          <AppFormField
            keyboardType="numeric"
            maxLength={15}
            name="cost"
            placeholder="Cost"
          />

          <SubmitButton title="Submit" />
        </AppForm>
      </ScrollView>
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
