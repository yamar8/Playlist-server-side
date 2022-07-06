const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    // required: true,
    unique: true,
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
  phoneNumber: {
    type: Number,
  },

  address: {
    street: { type: String },
    city: { type: String },
    homeNum: { type: Number },
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  token: {
    type: String,
    select: false,
    // required: true
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  permission: {
    type: String,
    enum: ["customer", "admin"],
    default: "customer"
  }
});

const userModel = mongoose.model("user", userSchema);

module.exports = { userModel };
//same:
// module.exports.userModel = userModel;
