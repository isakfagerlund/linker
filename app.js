const express = require("express");
const routes = require("./routes/index");
const path = require("path");

// create our Express app
const app = express();

// Serve files from public folder
app.use(express.static(path.join(__dirname, "public")));

// Our app routes
app.use("/", routes);

module.exports = app;
