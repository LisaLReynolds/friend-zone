const db = require("../models");

exports.createPost = async (req, res) => {
  try {
    const { content } = req.body;
    const image = req.file ? req.file.filename : null;
    console.log("User ID:", req.user.id); // Debug statement
    const post = await db.Post.create({
      content,
      image,
      user_id: req.user.id, // Ensure user_id is correctly set
    });
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await db.Post.findAll({
      include: [db.User, db.Comment, db.Like],
    });
    res.render("home", { title: "Home", posts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
