const linkFunctions = require("../handlers/links");

// Creating hash from url
exports.createLink = (req, res) => {
  // Get link
  // res.json(hash);
  res.json(linkFunctions.encode(10054));
};

// Getting the save url from hash link
exports.getLink = (req, res) => {
  const hash = req.params.hash;
  res.json(linkFunctions.decode(hash));
  // res.json(link);
};
