const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const postController = require("../controllers/postController");
const marketplaceController = require("../controllers/marketplaceController");

// Define the root route
router.get("/", postController.getPosts);

// Define the marketplace route
router.get("/marketplace", marketplaceController.getMarketplaces);

// Define other routes
router.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});

router.get("/register", (req, res) => {
  res.render("register", { title: "Register" });
});

router.get("/profile", auth, (req, res) => {
  res.render("profile", { title: "Profile", user: req.user });
});

// Include API routes
router.use("/api", require("./api"));

module.exports = router;
