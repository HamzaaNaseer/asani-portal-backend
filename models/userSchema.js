const mongoose = require("mongoose");
const { Schema } = mongoose;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "name required"],
    minlength: [5, "name should atleast be 5 chars"],
    maxlength: [30, "name should not exceed 30 chars "],
  },
  email: {
    type: String,
    required: [true, " email is required "],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
    minlength: [8, "password should be atleast 8 characters"],
    select: false, // not show this feild when finding users
  },
  address: {
    house: {
      type: String,
      default: "null",
    },
    street: {
      type: String,
      default: "null",
    },
    block: {
      type: String,
      default: "null",
    },
    additional_details: {
      type: String,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//generate jwt token
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.SECRET_KEY, {
    expiresIn: '1d', //expires after a day
  });
};

//compare the user entered password with the hash
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
