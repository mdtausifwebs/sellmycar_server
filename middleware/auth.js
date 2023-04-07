const usermodel = require("../src/model/userModel");
const jwt = require("jsonwebtoken");
const auth = async(req, res, next) => {
  try {
    const {token} = req.cookies
    if (!token) {
        return res.status(404).json({
          success: false,
          message: "login first",
        });
      }
      const matchuser = await jwt.verify(token, process.env.passcode);
      req.user = await usermodel.findById(matchuser.id);
    next()
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
module.exports=auth



