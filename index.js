const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./dbs/.env" });
const db = require("./dbs/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookiesParser = require("cookie-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cookiesParser());
app.use(
  cors({
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
    origin: true,
    preflightContinue: false,
  })
);

// AUTHENTICATION
app.use(async (req) => {
  try {
    const token = req.headers.authorization || req.cookies.auth;
    const { person } = await jwt.verify(token, SECRET);
    req.person = person;
    return req.next();
  } catch (e) {
    return req.next();
  }
});

const routers = require("./src/router/routers");

app.use("/api/v1", routers);

app.listen(process.env.PORT, async () => {
  try {
    await db();
    console.log(`server is running on http://localhost:${process.env.PORT}`);
  } catch (er) {
    console.log(er);
  }
});
