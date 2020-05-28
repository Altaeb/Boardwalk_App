import React from "react";
import styles from "../constants/Styles";
import buttons from "../constants/buttons";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
const Loan = ({
  title,
  loanAmount,
  interestRate,
  monthlyPaymentAmount,
  years,
  deleteUserLoan,
  loanId
}) => {
  const handleDeleteUserLoan = () => {
    deleteUserLoan({ loanId });
  };
  return (
    <View style={loanStyles.container}>
      <Text style={loanStyles.title}>{title}</Text>
      <View>
        <Text style={loanStyles.text}>
          Loan Amount: ${loanAmount.toFixed(2)}
        </Text>
        <Text style={loanStyles.text}>
          Monthly Payment: ${monthlyPaymentAmount.toFixed(2)}
        </Text>
        <Text style={loanStyles.text}>Years: {years}</Text>
        <Text style={loanStyles.text}>
          Interest Rate: {interestRate.toFixed(2)}%
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={buttons.deleteButton}
          onPress={handleDeleteUserLoan}
        >
          <Text style={buttons.textWhite}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const loanStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 20,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,0.7)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24
  },
  title: {
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "bold",
    padding: 10
  },
  text: {
    fontSize: 17
  }
});

export default Loan;
