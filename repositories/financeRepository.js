import { addAnnualIncome, getUserLoans, addNewLoan, deleteLoan } from '../repositories/users';

export default (() => (
    {
        addAnnualIncome: ({ userId, newAnnualIncome }) => addAnnualIncome({ userId, newAnnualIncome }),
        addNewLoan: ({ userId, newLoan }) => addNewLoan({ userId, newLoan }),
        getUserLoans: ({ userId }) => getUserLoans({ userId }),
        deleteLoan: ({ userId, loanId }) => deleteLoan({ userId, loanId })
    }
))();