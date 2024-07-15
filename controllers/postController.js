const db = require("../models");

exports.createPost = async (req, res) => {
  try {
    const { content, image } = req.body;
    const post = await db.Post.create({ content, image, UserId: req.user.id });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await db.Post.findAll({
      include: [db.User, db.Comment, db.Like],
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
