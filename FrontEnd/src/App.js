import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import AuthContext from "./app/auth/context";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./app/navigations/BottomNavigation";
import navigationTheme from "./app/navigations/navigationTheme";
// import AppPicker from "./app/components/AppPicker";
// import AppTextInput from "./app/components/AppTextInput";
import LoginNavigation from "./app/navigations/LoginNavigation";

export default function App() {
  const [user, setUser] = useState();
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {/* {user ?  */}
        <LoginNavigation />
        // : <BottomNavigation />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
