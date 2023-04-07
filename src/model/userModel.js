const { default: mongoose, model } = require("mongoose");
const jwt = require("jsonwebtoken");
const usermodel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
      default: "avtar",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
usermodel.methods.genrateToken = function () {
  return jwt.sign({ id: this._id }, process.env.passcode);
};

module.exports = mongoose.model("users", usermodel);
