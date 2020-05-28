import financeRepository from '../repositories/financeRepository';

const addAnnualIncome = ({ userId, annualIncome }) => {
    financeRepository.addAnnualIncome({ userId, newAnnualIncome: annualIncome });

}

const getUserLoans = ({ userId }) => {
    return financeRepository.getUserLoans({ userId });
}

const addNewLoan = ({ userId, newLoan }) => {
    financeRepository.addNewLoan({ userId, newLoan });
}

const deleteLoan = ({ userId, loanId }) => {
    financeRepository.deleteLoan({ userId, loanId });
}

export { addAnnualIncome, getUserLoans, addNewLoan, deleteLoan }