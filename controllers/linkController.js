const mongoose = require("mongoose");
const linkFunctions = require("../handlers/links");
const Links = mongoose.model("Links");
const Counter = mongoose.model("Counter");

// Creating hash from url
exports.createLink = (req, res) => {
  // Get link
  console.log(req.body);
  res.json(linkFunctions.encode(10326));
};

// Getting the save url from hash link
exports.getLink = (req, res) => {
  const hash = req.params.hash;
  res.json(linkFunctions.decode(hash));
  // res.json(link);
};
