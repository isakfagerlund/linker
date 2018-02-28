const express = require("express");
const router = express.Router();
const linkController = require("../controllers/linkController");

router.get("/v1/links", linkController.createLink);

router.post("/v1/links", linkController.createLink);

router.get("/v1/:hash", linkController.getLink);

module.exports = router;
