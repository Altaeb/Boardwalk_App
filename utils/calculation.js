const calculateMonthlyPayment = (loanAmount, numberOfYears, rate, paymentsPerYear = 12) => {
    let numberOfPaymentsMonth = numberOfYears * paymentsPerYear;
    let MonthlyInterestRate = rate / 100 / 12;
    return loanAmount * MonthlyInterestRate * (Math.pow((1 + MonthlyInterestRate), numberOfPaymentsMonth)) / (Math.pow((1 + MonthlyInterestRate), numberOfPaymentsMonth) - 1)
};

export { calculateMonthlyPayment }