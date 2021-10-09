import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import AppFormField from "../components/AppFormField";
import AppForm from "../components/AppForm.js";
import Screen from "../components/Screen.js";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = ({ props, navigation }) => {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/hospital.jpg")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          securityTextEntry
          textContentType="password"
        />

        <AppButton title="Login" onPress={() => navigation.navigate("Home")} />
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

export default LoginScreen;
