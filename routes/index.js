const express = require("express");
const router = express.Router();

// Define the root route
router.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

// Define the login route
router.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});

// Define the register route
router.get("/register", (req, res) => {
  res.render("register", { title: "Register" });
});

// Define the profile route
router.get("/profile", (req, res) => {
  res.render("profile", { title: "Profile" });
});

// Define the marketplace route
router.get("/marketplace", (req, res) => {
  res.render("marketplace", { title: "Marketplace" });
});

// Include API routes
router.use("/api", require("./api"));

module.exports = router;
