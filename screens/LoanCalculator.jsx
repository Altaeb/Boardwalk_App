import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import buttons from "../constants/buttons";
import background from "../assets/images/background5.jpg";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput,
  Text,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import styles from "../constants/Styles";
import { calculateMonthlyPayment } from "../utils/calculation";

export default class LoanCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthlyLoanAmount: "",
      loanAmount: "",
      interestRate: "",
      totalLoanYears: ""
    };
  }

  handleCalculateMonthly = () => {
    const loanAmount = parseInt(this.state.loanAmount);
    const interestRate = parseInt(this.state.interestRate);
    const totalLoanYears = parseInt(this.state.totalLoanYears);

    const monthlyLoanAmount = calculateMonthlyPayment(
      loanAmount,
      interestRate,
      totalLoanYears
    );
    this.setState({
      monthlyLoanAmount: monthlyLoanAmount,
      loanAmount: "",
      interestRate: "",
      totalLoanYears: ""
    });
  };

  render() {
    const { monthlyLoanAmount } = this.state
    return (
      <ImageBackground
        source={background}
        style={styles.backgroundImage}
      >
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View>
            {monthlyLoanAmount > 1 ? (<View style={newStyle.textContainer}>
              <Text style={newStyle.text}>{monthlyLoanAmount.toFixed(2)}</Text>
            </View>) :
              <View>
                <Text>
                  Fill in all fields and press calculate.
                </Text>
              </View>}

            <TextInput
              style={styles.inputBox}
              placeholder="Loan Amount"
              placeholderTextColor="#c7c7c7"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={loanAmount => {
                this.setState({ loanAmount });
              }}
              value={this.state.loanAmount}
              keyboardAppearance="dark"
            />
            <TextInput
              style={styles.inputBox}
              placeholder="Loan Term In Years"
              placeholderTextColor="#c7c7c7"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={totalLoanYears => {
                this.setState({ totalLoanYears });
              }}
              value={this.state.totalLoanYears}
              keyboardAppearance="dark"
            />
            <TextInput
              style={styles.inputBox}
              placeholder="Interest Rate"
              placeholderTextColor="#c7c7c7"
              onChangeText={interestRate => {
                this.setState({ interestRate });
              }}
              value={this.state.interestRate}
              keyboardAppearance="dark"
            />
            <View style={styles.buttonsContainer}>

              <TouchableOpacity
                style={buttons.addLoanButton}
                onPress={this.handleCalculateMonthly}
              >
                <Text style={buttons.textWhite}>Calculate</Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: 40 }}></View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const newStyle = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 50,
    opacity: 1,
    margin: 15
  },

  textContainer: {
    alignItems: "center",
    backgroundColor: "rgba(70, 53, 71, 0.65)",
    borderRadius: 30
  }
});
