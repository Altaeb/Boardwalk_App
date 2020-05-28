import React from "react";
import { Actions } from "react-native-router-flux";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import styles from "../constants/Styles";
import LogoHome from "../components/LogoHome";
import { userProfile } from "../services/userService";
import { stringCapitalize } from "../utils/stringUtils";
import background from "../assets/images/background5.jpg";

export default function HomeScreen({ userId, handleAuth }) {
  const { firstName } = userProfile({ userId });

  const profile = () => {
    Actions.profile();
  };

  const loanCalc = () => {
    Actions.loanCalc();
  };

  const loans = () => {
    Actions.loans();
  };

  const logOut = () => {
    Alert.alert(
      "Warning",
      "You are about to log out!",
      [
        {
          text: "Cancel",
          onPress: () => alert("Stack your coins!"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            alert("Logged Out", "");
            setTimeout(() => handleAuth(null, false), 1000);
          }
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
      <View style={styles.container}>
        <LogoHome
          height={200}
          width={200}
          radius={20}
          title={"Welcome, " + stringCapitalize(firstName) + "!"}
        />
        <View>
          <View style={homeStyle.buttonsContainer}>
            <TouchableOpacity style={homeStyle.button} onPress={profile}>
              <Text style={homeStyle.buttonText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyle.button} onPress={loanCalc}>
              <Text style={homeStyle.buttonText}>Loan Calculator</Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyle.button} onPress={loans}>
              <Text style={homeStyle.buttonText}>Loans</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={homeStyle.logOutButton} onPress={logOut}>
          <Text style={{ fontSize: 15, color: "white", fontWeight: "bold" }}>Log Out</Text>
        </TouchableOpacity>
        <View style={{ height: 40 }} />
      </View>
    </ImageBackground>
  );
}

const homeStyle = StyleSheet.create({
  buttonsContainer: {
    justifyContent: "center",
    flexDirection: "column"
  },

  button: {
    alignItems: "center",
    backgroundColor: "#395697",
    margin: 10,
    width: 300,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },

  logOutButton: {
    alignItems: "center",
    backgroundColor: "#9d0b0b",
    margin: 5,
    width: 100,
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "white"
  },
  
  buttonText: {
    color: "#fff",
    fontSize: 20
  }
});
