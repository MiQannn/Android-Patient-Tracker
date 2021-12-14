import React, { useState } from "react";
import { StyleSheet, Button, Platform } from "react-native";
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
import DateTimePicker from "@react-native-community/datetimepicker";

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
const AppointmentScreen = (props) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "android");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

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
          value={props.value}
          onFocus={showDatepicker}
          type="date"
          name="appointmentDay"
          placeholder="Appointment Day"
          // onChange={onChange}
        />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            dateFormat="yyyy-MM-dd"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <AppFormField
          maxLength={255}
          name="appointmentDescription"
          placeholder="Appointment Description"
        />

        <SubmitButton title="Submit" />
        {/* <Button onPress={showDatepicker} title="Show date picker!" />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )} */}
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
