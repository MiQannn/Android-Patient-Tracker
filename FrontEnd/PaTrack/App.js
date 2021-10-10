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
  Alert,
} from "react-native";
import axios from "axios";
 
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
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    const res = await axios.post('http://localhost:5000/login', {
      doctorId: email,
      password: password
    })
    alert(JSON.stringify(res.data))
  }
 
  return (

    <ImageBackground source={{uri: 'https://media.idownloadblog.com/wp-content/uploads/2019/04/Gradient-V1-iphone-wallpaper-gradient-AR72014.png'}} style={styles.container}>
      
      <ImageLoader style={styles.image2}  source={require('../PaTrack/picture/TraceCase.png')} />
      <ImageLoader style={styles.image1}  source={require('../PaTrack/picture/doctor.png')} />
      

     
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

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}> 
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

  text: {
    marginBottom: 40,
  },

  image1: {
    width: 100,
    height: 100,
    resizeMode: 'center',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 10,
  },

  image2: {
    width: 650,
    height: 90,
    resizeMode: 'center',
    marginBottom: 40,
    marginLeft: 10,
  },

  inputView: {
    backgroundColor: "#FFFBF1",
    borderRadius: 30,
    width: "50%",
    height: 35,
    marginTop: 10,
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
    marginTop: 30,
    fontFamily: "Arial",
    color: "#fff",
  },
 
  loginBtn: {
    width: "30%",
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#267986",
    borderStyle: 'solid',
    borderWidth: 2
  },
});