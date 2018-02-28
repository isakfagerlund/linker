const express = require("express");
const routes = require("./routes/index");
const path = require("path");

// create our Express app
const app = express();

// Our app routes
app.use("/", routes);

module.exports = app;
