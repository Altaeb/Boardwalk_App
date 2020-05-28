const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const debtSchema = new Schema({
    loanAmount:{
        type: Number,
    },
    downPayment:{
        type: Number,
    },
    loanTerm:{
        type: Number,
    },
    interestRate:{
        type: Number,
    },
    debtAmount:{
        type: Number,
    },
    monthlyPaymentAmount:{
        type: Number,
    },
    oldinterestRate: {
        type: Number,
    }
});

const Debt = mongoose.model('Debt', debtSchema);

module.exports = Debt;