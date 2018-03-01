const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;

const counterSchema = new mongoose.Schema({
  _id: String,
  counterNumber: Number
});

module.exports = mongoose.model("Counter", counterSchema);
