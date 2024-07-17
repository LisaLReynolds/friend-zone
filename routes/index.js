const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const postController = require("../controllers/postController");
const marketplaceController = require("../controllers/marketplaceController");

// Define routes
router.get("/", postController.getPosts);
router.get("/marketplace", marketplaceController.getMarketplaces);
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
router.use("/api/users", require("./api/userRoutes"));
router.use("/api/posts", require("./api/postRoutes"));
router.use("/api/comments", require("./api/commentRoutes"));
router.use("/api/likes", require("./api/likeRoutes"));
router.use("/api/marketplace", require("./api/marketplaceRoutes"));

module.exports = router;
