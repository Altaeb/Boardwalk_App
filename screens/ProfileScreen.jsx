import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import styles from "../constants/Styles";
import UserImage from "../components/UserImage";
import { userProfile } from "../services/userService";
import { addAnnualIncome, getUserLoans } from "../services/financeService";
import { stringCapitalize } from "../utils/stringUtils";
import buttons from "../constants/buttons";
import background from "../assets/images/background5.jpg"

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      annualIncome: 0,
      firstName: "",
      lastName: "",
      saving: 0,
      totalLoanAmount: 0
    };
  }

  componentDidMount() {
    const {
      firstName,
      lastName,
      finance: { annualIncome }
    } = userProfile({
      userId: this.props.userId
    });

    const loans = getUserLoans({ userId: this.props.userId });
    let totalLoanAmount = 0;

    loans.forEach((loan) => {
      totalLoanAmount += loan.monthlyPayment * 12
    });

    this.setState({
      firstName,
      lastName,
      annualIncome,
      totalLoanAmount,
      saving: annualIncome - totalLoanAmount
    });
  }

  handleUpdateAnnualIncome = () => {
    try {
      const { annualIncome, totalLoanAmount } = this.state;
      const parsedAnnualIncome = parseInt(annualIncome);

      addAnnualIncome({
        userId: this.props.userId,
        annualIncome: parsedAnnualIncome
      });

      this.setState(
        {
          annualIncome: parsedAnnualIncome,
          totalLoanAmount,
          saving: annualIncome - totalLoanAmount
        },
        () => console.log("handleUpdateAnnualIncome: ", { state: this.state })
      );
    } catch (e) {
      // TODO handle error case
      console.log("Exception: ", { e });
    }
  };

  render() {
    const {
      firstName,
      lastName,
      annualIncome,
      saving,
      totalLoanAmount
    } = this.state;
    return (
      <ImageBackground
        source={background}
        style={styles.backgroundImage}
      >
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <UserImage
            fullName={
              stringCapitalize(firstName) + " " + stringCapitalize(lastName)
            }
          />
          <View>
            <Text style={{ color: "white" }}>Annual Income</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Annual Income"
              placeholderTextColor="#c7c7c7"
              selectionColor="#fff"
              keyboardType="numeric"
              keyboardAppearance="dark"
              onChangeText={annualIncome => this.setState({ annualIncome })}
              value={annualIncome.toString()}
            />
            <TouchableOpacity
              style={profileStyle.button}
              onPress={this.handleUpdateAnnualIncome}
            >
              <Text style={buttons.textWhite}>Update</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ color: "white" }}>Yearly Savings: ${saving.toFixed(2)}</Text>
          </View>
          <View>
            <Text style={{ color: "white" }}>
              Yearly Total Loan Amount: ${totalLoanAmount.toFixed(2)}
            </Text>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const profileStyle = StyleSheet.create({
  buttonsContainer: {
    justifyContent: "center",
    flexDirection: "column"
  },

  button: {
    backgroundColor: "#007944",
    width: 100,
    padding: 5,
    borderRadius: 30,
    marginVertical: 10,
    borderWidth: 0.5,
    borderColor: 'white',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },

  logOutButton: {
    backgroundColor: "#463547",
    margin: 5,
    width: 100,
    padding: 5
  }
});
