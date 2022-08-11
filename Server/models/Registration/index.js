const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Registration = new Schema({
  plateNumber: String,
  type: String,
});

const newRegistration = mongoose.model("register", Registration);
module.exports = newRegistration;
