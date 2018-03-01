const mongoose = require("mongoose");

// import vafriables from .env file
require("dotenv").config({ path: "variables.env" });

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on("error", err => {
  console.error(`🚫 🚫 🚫 🚫 → ${err.message}`);
});

// Import our mongoDB models
require("./models/Counter");
require("./models/Links");

// Start our app
const app = require("./app");

const server = app.listen(process.env.PORT || 8888, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
