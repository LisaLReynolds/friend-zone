const db = require("../models");

exports.createListing = async (req, res) => {
  try {
    const { content, image, price } = req.body;
    const listing = await db.Marketplace.create({
      content,
      image,
      price,
      UserId: req.user.id,
    });
    res.status(201).json(listing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getListings = async (req, res) => {
  try {
    const listings = await db.Marketplace.findAll({ include: [db.User] });
    res.json(listings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
