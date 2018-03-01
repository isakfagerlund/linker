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
  Links.findOne({ long_url: longUrl }, function(err, doc) {
    if (doc) {
      // We found the url in the database so we just return the shortUrl directly
      shortUrl = linkFunctions.encode(doc._id);
      console.log(shortUrl);
      res.json({ shortUrl });
    } else {
      // If the url is not in the database we create a new database post
      const newUrl = new Links({ long_url: longUrl });
      console.log(newUrl);

      newUrl.save(function(err) {
        if (err) {
          console.log(err);
          return;
        }

        shortUrl = linkFunctions.encode(newUrl._id);
        res.json({ shortUrl });
      });
    }
  });
  // res.json(linkFunctions.encode(10326));
};

// Getting the save url from hash link
exports.getLink = (req, res) => {
  const hash = req.params.hash;
  res.json(linkFunctions.decode(hash));
  // res.json(link);
};
