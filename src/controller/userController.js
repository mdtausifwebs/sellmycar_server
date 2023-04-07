const userModel = require("../model/userModel");

const adduser = async (req, res) => {
  try {
    let user = await userModel.findOne({ email: req.body.email });
    // console.log("user", user);
    if (!user) {
      user = await userModel.create(req.body);
      // console.log('user', user);
      const token = await user.genrateToken();
      await res.cookie("token", token, Date(Date.now() + 900000));
      return res.status(201).json({
        success: true,
        user,
      });
    }
    return res.status(302).json({
      success: false,
      message: "email is already register",
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

const loginuser = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    console.log("user login ", user);
    const token = await user.genrateToken();
    await res.cookie("token", token, Date(Date.now() + 900000));
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
const logoutuser = async (req, res) => {
  try {
    await res.cookie("token", "", Date(Date.now()));
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
const getuser = async (req, res) => {
  try {
    const user = req.user;
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
const getusers = async (req, res) => {
  try {
    const user = await userModel.find();
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { adduser, loginuser, getuser, getusers, logoutuser };
