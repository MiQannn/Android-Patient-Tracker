import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from "react-native";
 
class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                })
              },
            ],
          },
          this.props.style,
        ]}
      />
    );
  }
}

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (

    <ImageBackground source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUkdKq7Xrg8J3NXnzPcdF1JQeMrefC9hQnow&usqp=CAU'}} style={styles.container}>
      
      <ImageLoader style={styles.image1}  source={require('../PaTrack/picture/doctor.png')} />
      <ImageLoader style={styles.image2}  source={require('../PaTrack/picture/TraceCase.png')} />
     
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#696969"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#696969"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}> 
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

    </ImageBackground>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image1: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },

  image2: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 30,
    marginRight: 5,
  },

  title: {
    fontSize: 60,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Arial",
  },

  inputView: {
    backgroundColor: "#FFFBF1",
    borderRadius: 30,
    width: "50%",
    height: 35,
    marginTop: 0,
    marginBottom: 20,
    alignItems: "center",
    borderStyle: 'solid',
    borderWidth: 2
  },
 
  loginText: {
    fontFamily: "Arial",
    fontSize: 12,
    color: '#FFFFFF'
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 0,
    fontFamily: "Arial",
    fontStyle: 'italic'
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    marginTop: 50,
    fontFamily: "Arial",
    color: "#fff",
  },
 
  loginBtn: {
    width: "20%",
    borderRadius: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#00b7eb",
    borderStyle: 'solid',
    borderWidth: 2
  },
});