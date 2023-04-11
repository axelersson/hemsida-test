var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var corsImport = require("cors");
var dotenv = require("dotenv");
var helmet = require("helmet");
var path = require("path");
var logger = require("morgan");
import { register } from "./controllers/auth.js";

/* var cookieParser = require('cookie-parser'); */

/* CONFIGURATIONS */

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

/*ROUTES WITH FILES*/

app.post("/auth/register", upload.single);

dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(logger("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(corsImport());

/* app.use(logger("dev")); */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/* app.use(cookieParser()); */
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
