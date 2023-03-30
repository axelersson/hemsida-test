const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mysitedb");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});

//letar efter lowercased plural om man anger det motsatta.
const User = mongoose.model("User", userSchema);

userSchema.path("_id");

const toBeAdded = new User({
  firstName: "Axel",
  lastName: "Ersson",
  email: "axel.ersson@live.se",
});

toBeAdded
  .save()
  .then(() => {
    console.log("User saved!");
  })
  .catch((error) => {
    console.log(error);
  });

/* User.create({
  firstName: "Axel",
  lastName: "Ersson",
  email: "axel.ersson@live.se",
}); */

/*
try {
  addToDatabase();
} catch (error) {
  console.log(error);
}

async function addToDatabase() {
  
   
  const user = await User.create({
    firstName: "Axel",
    lastName: "Ersson",
    email: "axel.ersson@live.se",
  });

  await user.save();
  console.log(user);
}

*/
