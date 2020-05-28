import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import buttons from "../constants/buttons";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from "react-native";
import styles from "../constants/Styles";
import { getUserLoans, deleteLoan } from "../services/financeService";
import Loan from "../components/Loan";
import background from "../assets/images/background5.jpg";

export default class Loans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debtAmount: "",
      monthlyPaymentAmount: "",
      interestRate: "",
      loans: []
    };
  }

  componentDidMount() {
    this.handleFetchLoans();
  }

  UNSAFE_componentWillReceiveProps() {
    this.handleFetchLoans();
  }

  newLoan = () => {
    Actions.newLoan();
  };

  deleteUserLoan = ({ loanId }) => {
    deleteLoan({ userId: this.props.userId, loanId });
    this.handleFetchLoans();
  };

  handleFetchLoans = () => {
    const { userId } = this.props;
    const loans = getUserLoans({ userId });

    this.setState({ loans });
  }

  render() {
    const { loans } = this.state;

    return (
      <ImageBackground source={background} style={styles.backgroundImage}>
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={buttons.addLoanButton}
              onPress={this.newLoan}
            >
              <Text style={buttons.textWhite}>Add New Loan</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            {loans.map(loan => (
              <Loan
                title={loan.title}
                loanAmount={loan.loanAmount}
                interestRate={loan.interestRate}
                monthlyPaymentAmount={loan.monthlyPayment}
                years={loan.totalLoanYears}
                key={loan.id}
                loanId={loan.id}
                deleteUserLoan={this.deleteUserLoan}
              />
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const loansStyles = StyleSheet.create({
  buttonsContainer: {
    justifyContent: "center",
    flexDirection: "column"
  },
  button: {
    backgroundColor: "#463547",
    margin: 10,
    width: 300,
    padding: 5,
    borderRadius: 30,
    marginVertical: 10
  },
  logOutButton: {
    backgroundColor: "#463547",
    margin: 5,
    width: 100,
    padding: 5
  }
});
