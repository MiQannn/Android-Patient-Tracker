import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
     <Image style={{width: 200, height: 200}} source={{uri:'data:image/jpeg;base64,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'}} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#000000"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#000000"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}> 
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#ffa486",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});