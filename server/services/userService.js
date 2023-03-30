const mongoose = require("mongoose");
const userModel = require("../mongoModels/userModel");
const db = mongoose.connection;

async function getAll() {
  const users = await userModel.find({});
  console.log(users);
  return users;
}
module.exports = { getAll };
