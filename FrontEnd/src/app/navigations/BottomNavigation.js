import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import LoginScreen from "../screens/LoginScreen";
import MedicalInputScreen from "../screens/MedicalInputScreen";
import PatientInfoScreen from "../screens/PatientInfoScreen";
import HomeScreen from "../screens/HomeScreen";
import AppointmentScreen from "../screens/AppointmentScreen";
import SettingScreen from "../screens/SettingScreen";

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Login" component={LoginScreen} /> */}
      <Tab.Screen name="MedicalInput" component={MedicalInputScreen} />
      <Tab.Screen name="PatientInfo" component={PatientInfoScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Appointment" component={AppointmentScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
