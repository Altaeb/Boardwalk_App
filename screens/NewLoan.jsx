import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { addNewLoan } from "../services/financeService";
import { getUserLoans } from "../services/financeService";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Text,
  ImageBackground
} from "react-native";
import styles from "../constants/Styles";
import buttons from "../constants/buttons";
import background from "../assets/images/background5.jpg"

export default class NewLoan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      loanAmount: "",
      interestRate: "",
      totalLoanYears: ""
    };
  }

  handleAddLoan = () => {
    const userId = this.props.userId;
    const title = this.state.title;
    const loanAmount = parseInt(this.state.loanAmount);
    const interestRate = parseInt(this.state.interestRate);
    const totalLoanYears = parseInt(this.state.totalLoanYears);

    const newLoan = { title, loanAmount, interestRate, totalLoanYears };

    addNewLoan({
      userId,
      newLoan
    });

    Actions.pop({ refresh: {}, timeout: 1 });
  };

  render() {
    return (
      <ImageBackground
        source={background}
        style={styles.backgroundImage}
      >
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View>
            <TextInput
              style={styles.inputBox}
              placeholder="Title"
              placeholderTextColor="#c7c7c7"
              selectionColor="#fff"
              keyboardType="default"
              onChangeText={title => {
                this.setState({ title });
              }}
              value={this.state.title}
              keyboardAppearance="dark"
            />
            <TextInput
              style={styles.inputBox}
              placeholder="Loan Amount"
              placeholderTextColor="#c7c7c7"
              selectionColor="#fff"
              keyboardType="numeric"
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
              keyboardType="numeric"
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
              keyboardType="numeric"
              onChangeText={interestRate => {
                this.setState({ interestRate });
              }}
              value={this.state.interestRate}
              keyboardAppearance="dark"
            />
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={buttons.addLoanButton}
                onPress={this.handleAddLoan}
              >
                <Text style={buttons.textWhite}>Add Loan</Text>
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
