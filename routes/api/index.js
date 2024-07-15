const express = require("express");
const router = express.Router();

router.use("/users", require("./userRoutes"));
router.use("/posts", require("./postRoutes"));
router.use("/comments", require("../../commentRoutes"));
router.use("/likes", require("./likeRoutes"));
router.use("/marketplace", require("./marketplaceRoutes"));

module.exports = router;
