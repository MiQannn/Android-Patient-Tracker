import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import AuthContext from "./app/auth/context";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./app/navigations/BottomNavigation";
import navigationTheme from "./app/navigations/navigationTheme";
import LoginNavigation from "./app/navigations/LoginNavigation";

export default function App() {
  const [user, setUser] = useState();
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <BottomNavigation /> : <LoginNavigation />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
