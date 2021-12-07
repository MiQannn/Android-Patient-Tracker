import Screen from "../components/Screen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import PatientInfoScreen from "../screens/PatientInfoScreen";
import MedicalInputScreen from "../screens/MedicalInputScreen";
import PatientInputScreen from "../screens/PatientInputScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigation from "./BottomNavigation";

import React from "react";
const Stack = createNativeStackNavigator();

// import { createStackNavigator } from "@react-navigation/stack";

// const Stack = createStackNavigator();

const LoginNavigation = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Home" component={BottomNavigation} />
    {/* <Stack.Screen name="PatientInfo" component={PatientInfoScreen} /> */}
    {/* <Stack.Screen name="MedicalInput" component={MedicalInputScreen} /> */}
    {/* <Stack.Screen name="PatientInput" component={PatientInputScreen} /> */}
  </Stack.Navigator>
);

export default LoginNavigation;
