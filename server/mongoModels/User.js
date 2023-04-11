const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => new mongoose.Types.ObjectId().toString(),
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  lastName: {
    type: String,
    required: true,
    min: 2,
    max: 100,
  },
  email: {
    type: String,
    require: true,
    min: 8,
    max: 100,
    validate: {
      emailValidator: function (v) {
        return /[@.]/.test(v);
      },
      message: (props) => `${props.value} is not a valid email`,
    },
    unique: true,
  },
  password: {
    type: String,
    required: true,
    validate: {
      emailValidator: function (v) {
        return /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).+$/.test(v);
      },
      message: () =>
        `The password needs to contain one uppercase letter, one number and one non word character`,
    },
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  goals: [
    {
      title: String,
      body: String,
      update: String,
      createdAt: Date,
      updatedAt: Date,
      completedAt: Date,
      completed: Boolean,
    },
  ],
  healthData: [
    {
      weight: {
        date: Date,
        inKilos: Number,
        fatPercentage: Number,
      },
      sleep: {
        date: Date,
        hours: Number,
        desciption: String,
      },
      training: {
        typeOfTraining: String,
        date: Date,
        description: String,
      },
    },
  ],
});

UserSchema.pre("save", function (next) {
  const currentDate = new Date();
  this.updatedAt = currentDate;

  if (!this.createdAt) {
    this.createdAt = currentDate;
  }

  if (this.isModified("completed") && this.completed) {
    this.completedAt = currentDate;
  } else if (this.isModified("completed") && !this.completed) {
    this.completedAt = undefined;
  }

  next();
});

userModel.path("_id");

module.exports = mongoose.model("User", UserSchema);
