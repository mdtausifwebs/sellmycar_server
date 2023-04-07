const auth = require("../../middleware/auth");
const {
  addcar,
  getcars,
  deleteone,
  deleteall,
  sortcompay,
} = require("../controller/carController");
const {
  adduser,
  getusers,
  loginuser,
  logoutuser,
  getuser,
} = require("../controller/userController");

const routers = require("express").Router();

// users routes
routers.post("/signup", adduser);
routers.post("/loginuser", loginuser);
routers.get("/getuser", auth, getuser);
routers.get("/getusers", auth, getusers);
routers.get("/logout", auth, logoutuser);

// cars route
routers.post("/addcar", addcar);
routers.get("/getcars", getcars);
routers.post("/deleteone/:id", deleteone);
routers.post("/deleteall/:id", deleteall);
routers.get("/sortcompany", sortcompay);

module.exports = routers;
