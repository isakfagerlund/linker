const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const path = require("path");

// create our Express app
const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Our app routes
app.use("/", routes);

module.exports = app;
