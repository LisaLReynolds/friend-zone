const express = require("express");
const router = express.Router();
const postController = require("../../controllers/postController");
const auth = require("../../middleware/auth"); // Ensure this path is correct

router.post("/", auth, postController.createPost);
router.get("/", auth, postController.getPosts);

module.exports = router;
