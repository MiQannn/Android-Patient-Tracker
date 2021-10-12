import React, {Component} from "react";
import { StyleSheet, Image, View, TouchableOpacity, Text, Animated } from "react-native";
import * as Yup from "yup";
// import Modal from "react-native-modal";
import AppFormField from "../components/AppFormField";
import AppForm from "../components/AppForm.js";
import Screen from "../components/Screen.js";
// import AppButton from "../components/AppButton";

//this is a class to load image
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

//function for popup message when user choose Forgot pass -> still in developement
// function ModalTester() {
//   const [isModalVisible, setModalVisible] = useState(false);

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = ({ props, navigation }) => {
  return (
    <Screen style={styles.container}>
     
      
      <ImageLoader style={styles.image1}  source={require('../assets/logo.png')} />
      <ImageLoader style={styles.image2}  source={require('../assets/doctor.png')} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
         
        <AppFormField
          style={styles.boxinside}
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="ID"
          textContentType="emailAddress"
        />
       
        <View style={styles.inputView}>
        <AppFormField
          style={styles.boxinside}
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          securityTextEntry
          textContentType="password"
        />
        </View>
        <TouchableOpacity title="Login" onPress={() => navigation.navigate("Home")} style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </AppForm>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* function for popup message when user choose Forgot pass -> still in developement */}
      {/* <View style={{ flex: 1 }}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View> */}

    </Screen>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image1: {
    //display: "flex",
    height: "60%",
    aspectRatio: 3,
    width: "10%",
    resizeMode: "contain",
    marginTop: -250,
    marginRight: 15,
  },

  image2: {
    width: 100,
    height: "20%",
    resizeMode: "contain",
    marginTop: -120,
    marginBottom: 10,
  },

  boxinside: {
    width: 200,
    height: 20,
    alignItems: "center",
    fontFamily: "Arial",
  },

  loginBtn: {
    width: 100,
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#267986",
    borderStyle: 'solid',
    borderWidth: 2
  },

  loginText: {
    fontFamily: "Arial",
    fontSize: 12,
    color: '#FFFFFF'
  },

  forgot_button: {
    marginBottom: -50,
    marginTop: 20,
  },

});

export default LoginScreen;
