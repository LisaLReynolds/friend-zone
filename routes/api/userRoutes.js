const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController"); // Ensure this path is correct

router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;
