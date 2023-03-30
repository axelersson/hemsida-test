/* const mongoose = require("mongoose");
const User = require("./mongoModels/userModel");
mongoose
  .connect(
    "mongodb+srv://axelersson:rQW9bfxk38rZu5AW@cluster0.ib24pql.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB");
  });

//letar efter lowercased plural om man anger det motsatta.

const toBeAdded = new User({
  firstName: "Hejsan",
  lastName: "Svejsan",
  email: "Hejsan.Svejsan@live.se",
});

toBeAdded
  .save()
  .then(() => {
    console.log("User saved!");
  })
  .catch((error) => {
    console.log(error);
  });
 */
