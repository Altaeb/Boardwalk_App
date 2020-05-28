// Backend data mock

import { calculateMonthlyPayment } from '../utils/calculation'
let users = [
    {
        id: Date.now(),
        firstName: "Emilio",
        lastName: "Valladares",
        password: "1234",
        email: "vallae@uw.edu",
        finance: {
            annualIncome: 50000,
            totalLoanAmount: 10000,
            loans: [
                {
                    id: Date.now(),
                    title: "School loan",
                    loanAmount: 10000,
                    monthlyPayment: 200,
                    interestRate: 2.7,
                    totalLoanYears: 5,
                }
            ]
        }
    }
]

const getSingleUserByUserId = (userId) => {
    return users.find(user => user.id === userId);
}

const getSingleUserByEmail = (email) => (
    users.find(user => user.email === email)
)

const addNewUser = ({ firstName, lastName, email, password }) => {
    const newUser = {
        id: Date.now(),
        firstName: firstName.toLowerCase(),
        lastName: lastName.toLowerCase(),
        email: email.toLowerCase(),
        password,
        finance: {
            annualIncome: 0,
            totalLoanAmount: 0,
            loans: []
        }
    }

    users.push(newUser);
    return newUser;
}

const getUserFinanceData = (userId) => {
    const user = getSingleUserByUserId(userId);
    return user.finance;
}

const addAnnualIncome = ({ userId, newAnnualIncome }) => {
    users.forEach(user => {
        if (user.id === userId) {
            return user.finance.annualIncome = newAnnualIncome;
        }
    })
}

const deleteLoan = ({ userId, loanId }) => {
    let loans = getUserLoans({ userId })
    loans.forEach((loan, index) => {
        if (loan.id === loanId) {
            loans.splice(index, 1);
        }
    })
}

const addNewLoan = ({ userId, newLoan }) => {
    const { loanAmount, interestRate, totalLoanYears } = newLoan;

    users.forEach(user => {
        if (user.id === userId) {
            user.finance.totalLoanAmount += loanAmount;
            user.finance.loans.push({
                id: Date.now(),
                monthlyPayment: calculateMonthlyPayment(loanAmount, totalLoanYears, interestRate),
                ...newLoan
            });
        }
    })
}

const getUserLoans = ({ userId }) => {
    const user = getSingleUserByUserId(userId);
    return user.finance.loans;
}

export {
    getSingleUserByUserId,
    getSingleUserByEmail,
    getUserFinanceData,
    getUserLoans,
    addAnnualIncome,
    addNewLoan,
    addNewUser,
    deleteLoan
}