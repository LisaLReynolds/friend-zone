const db = require("../models");

exports.getPosts = async (req, res) => {
  try {
    const posts = await db.Post.findAll({
      include: [db.User],
    });
    res.render("home", { title: "Home", posts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { content } = req.body;
    const image = req.file ? req.file.filename : null;

    await db.Post.create({
      content,
      image,
      user_id: req.user.id,
    });

    res.redirect("/");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
