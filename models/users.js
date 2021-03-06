const mongoose = require("mongoose");
const validator = require("validator");

let schema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: {
    type: String,
      unique: true,
    required:true,
    validate: [validator.isEmail, "wrong data in the email field"],
  },
  password: {
    type: String,
    min: 8,
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

module.exports = mongoose.model("user", schema);
