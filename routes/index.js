const express = require("express");
const router = express.Router();
const linkController = require("../controllers/linkController");

router.get("/v1/links", linkController.getAllLinks);

router.post("/v1/links", linkController.createLink);

router.get("/v1/:hash", linkController.getLink);

router.delete("/v1/:hash", linkController.deleteLink);

router.put("/v1/:hash", linkController.updateLink);

module.exports = router;
