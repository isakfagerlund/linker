const mongoose = require("mongoose");
const linkFunctions = require("../handlers/links");
const Links = mongoose.model("Links");
const Counter = mongoose.model("Counter");

// Creating hash from url
exports.createLink = (req, res) => {
  // Get link
  var longUrl = req.body.url;
  var shortUrl = "";
  // check if url already exists in database
  Links.findOne({ long_url: longUrl }, function(err, link) {
    if (link) {
      // We found the url in the database so we just return the shortUrl directly
      shortUrl = linkFunctions.encode(link._id);
      // res.json({ shortUrl });
      res.json({ error: "User already exists", shortUrl });
    } else {
      // If the url is not in the database we create a new database post
      const newUrl = new Links({ long_url: longUrl });

      newUrl.save(function(err) {
        if (err) {
          console.log(err);
          return;
        }
        shortUrl = linkFunctions.encode(newUrl._id);
        res.json({ shortUrl, _id: newUrl._id });
      });
    }
  });
};

// Getting the save url from hash link
exports.getLink = (req, res) => {
  const hash = req.params.hash;
  const decodedHash = linkFunctions.decode(hash);

  Links.findOne({ _id: decodedHash }, function(err, link) {
    if (link) {
      res.json(link.long_url);
    } else {
      res.json({ error: "This hash is not created" });
    }
  });
};

exports.getAllLinks = (req, res) => {
  Links.find({}, function(err, links) {
    res.json(links);
  });
};

exports.deleteLink = (req, res) => {
  const hash = req.params.hash;
  const decodedHash = linkFunctions.decode(hash);
  console.log(decodedHash);

  Links.findByIdAndRemove({ _id: decodedHash }, function(err, link) {
    if (link) {
      res.json({ _id: decodedHash });
    } else {
      res.json({ error: "This link does not exist" });
    }
  });
};
