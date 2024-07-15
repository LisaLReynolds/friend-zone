const express = require("express");
const router = express.Router();
const marketplaceController = require("../../controllers/marketplaceController");
const auth = require("../../middleware/auth");

router.post("/", auth, marketplaceController.createListing);
router.get("/", auth, marketplaceController.getListings);

module.exports = router;
