import React, { Component } from "react";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableOpacity,
  Text
} from "react-native";
import { Actions } from "react-native-router-flux";
import styles from "../constants/Styles";
import LogoHome from "../components/LogoHome";
import API from "../utils/API";
import background from "../assets/images/background2.jpg";

import { userSignUp } from "../services/userService";

export default class SignUpScreen extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    error: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    const { firstName, lastName, email, password } = this.state; //grab the current state for email and password
    const user = userSignUp({ firstName, lastName, email, password });

    if (user.id) {
      this.props.handleAuth(user.id, true);
    } else {
      console.log(user.message);
    }
  };

  render() {
    return (
      <ImageBackground source={background} style={styles.backgroundImage}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <LogoHome height={140} width={140} radius={25} title={"Welcome"} />
          <View>
            <TextInput
              style={styles.inputBox}
              placeholder="First Name"
              placeholderTextColor="#c7c7c7"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={firstName => {
                this.setState({ firstName });
              }}
              value={this.state.firstName}
              keyboardAppearance="dark"
            />
            <TextInput
              style={styles.inputBox}
              placeholder="Last Name"
              placeholderTextColor="#c7c7c7"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={lastName => {
                this.setState({ lastName });
              }}
              value={this.state.lastName}
              keyboardAppearance="dark"
            />
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
                <Text style={styles.buttonTextStyle}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ height: 60 }} />
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}
