const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const marketplaceController = require("../../controllers/marketplaceController");
const auth = require("../../middleware/auth");

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

router.post(
  "/",
  auth,
  upload.single("image"),
  marketplaceController.createItem
);

module.exports = router;
