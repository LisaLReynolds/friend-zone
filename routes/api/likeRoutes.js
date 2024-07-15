const express = require("express");
const router = express.Router();
const likeController = require("../../controllers/likeController");
const auth = require("../../middleware/auth");

router.post("/", auth, likeController.createLike);

module.exports = router;
