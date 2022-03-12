const mongoose = require("mongoose");
const validator = require("validator");

let schema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  accomodation_status: {
    type: String,
    required: true,
    enum: [
      "Looking to renew my rent",
      "Want to pay for a new place",
      "I'm still searching",
    ],
  },
  rent_amount: {
    type: Number,
    required: true,
  },
  monthly_income: {
    type: Number,
    required: true,
  },
  payment_plan: {
    type: String,
    enum: ["1 Month", "2 Month", "3 Month", "4 Month", "6 Month"],
  },
  tenure: {
    type: Number,
    required: true,
    max: 12,
    min: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("loan_application", schema);
