const db = require("../models");

exports.createItem = async (req, res) => {
  try {
    const { content, price } = req.body;
    const image = req.file ? req.file.filename : null;
    const item = await db.Marketplace.create({
      content,
      image,
      price,
      userId: req.user.id,
    });
    res.redirect("/marketplace");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMarketplaces = async (req, res) => {
  try {
    const marketplaces = await db.Marketplace.findAll({
      include: [db.User],
    });
    res.render("marketplace", { title: "Marketplace", items: marketplaces });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
