const express = require("express");
const router = express.Router();

router.get("/", function() {
  // Server index.html
});

router.post("/v1/links", function(req, res) {
  console.log("Create new short link");
});

router.get("/v1/:short-link-hash", function(req, res) {
  console.log("Route is working");
});

module.exports = router;
