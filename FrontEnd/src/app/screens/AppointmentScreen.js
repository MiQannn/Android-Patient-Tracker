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
import { createAppointment } from "../api/appointmentApi";

const validationSchema = Yup.object().shape({
  patientId: Yup.string().required().min(1).label("Patient Status"),
  appointmentDay: Yup.date()
    .required()
    .min(1)
    // .format("DD-MM-YYYY", true)
    .default(function () {
      return new Date();
    }),
  // Yup.date()
  //   .transform((value) => {
  //     return value ? moment(value).toDate() : value;
  //   })
  //   .required("Date of Birth is required")
  //   .max(dateToday, "Future date not allowed")
  //   .label("Appointment Day");

  appointmentDescription: Yup.string()
    .required()
    .min(1)
    .label("Appointment Description"),
});
const AppointmentScreen = ({ navigation }) => {
  const appointmentHandleSubmit = async (values, actions) => {
    let appointmentResult = undefined;
    try {
      appointmentResult = await createAppointment(
        values.patientId,
        values.appointmentDay,
        values.appointmentDescription
      );
      // resetForm();
      // authContext.setUser(result);
      alert(appointmentResult);
      // resetForm();
    } catch {
      actions.resetForm();
      return alert("Wrong Appointment Input");
    }
  };
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          patientId: "",
          appointmentDay: "",
          appointmentDescription: "",

          // category: null,
        }}
        onSubmit={appointmentHandleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          maxLength={255}
          name="patientId"
          placeholder="Patient Id"
        />
        <AppFormField
          maxLength={255}
          type="date"
          name="appointmentDay"
          placeholder="Appointment Day"
          // onChange={onChange}
        />
        <AppFormField
          maxLength={255}
          name="appointmentDescription"
          placeholder="Appointment Description"
        />

        <SubmitButton title="Submit" />
      </AppForm>
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
