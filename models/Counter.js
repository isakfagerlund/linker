const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;

const counterSchema = new mongoose.Schema({
  _id: String,
  seq: { type: Number, default: 0 }
});

module.exports = mongoose.model("Counter", counterSchema);
