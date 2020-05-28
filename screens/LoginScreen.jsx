import React, { Component } from "react";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableOpacity,
  Text
} from "react-native";
import background from "../assets/images/background2.jpg";
import styles from "../constants/Styles";
import { Actions } from "react-native-router-flux";
import LogoHome from "../components/LogoHome";
import { userLogin } from "../services/userService";

export default class LoginScreen extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  signup() {
    Actions.signup();
  }

  handleSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state; //grab the current state for email and password
    
    // API.login({ email: email, password: password }) // grab the object's email and password
    //   .then(result => {
    //     this.setState({ error: "hello I am in" });

    const user = userLogin({ email, password });

    if (user.id) {
      this.props.handleAuth(user.id, true);
    } else {
      this.setState({ error: user.message });
    }
    // match to app.jsx handleAuth
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     this.setState({ error: err });
    //   });
  };
  render() {
    return (
      <ImageBackground source={background} style={styles.backgroundImage}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <LogoHome height={200} width={200} radius={30} title={"Welcome"} />
          <View>
            <TextInput
              style={styles.inputBox}
              placeholder="Email"
              placeholderTextColor="#c7c7c7"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={email => {
                this.setState({ email });
              }}
              value={this.state.email}
              keyboardAppearance="dark"
            />
            <TextInput
              style={styles.inputBox}
              placeholder="Password"
              placeholderTextColor="#c7c7c7"
              secureTextEntry={true}
              onChangeText={password => {
                this.setState({ password });
              }}
              value={this.state.password}
              keyboardAppearance="dark"
            />
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.handleSubmit}
              >
                <Text style={styles.buttonTextStyle}>Log In</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={this.signup}>
                <Text style={styles.buttonTextStyle}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ height: 40 }}></View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}
