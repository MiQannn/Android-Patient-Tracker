import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./app/navigations/BottomNavigation";
import navigationTheme from "./app/navigations/navigationTheme";
// import AppPicker from "./app/components/AppPicker";
// import AppTextInput from "./app/components/AppTextInput";
import LoginNavigation from "./app/navigations/LoginNavigation";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <BottomNavigation /> */}
      <LoginNavigation/>
    </NavigationContainer>
  );
}
