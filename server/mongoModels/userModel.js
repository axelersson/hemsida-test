const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});

console.log("hej");

userModel.path("_id");

module.exports = mongoose.model("User", userModel);
