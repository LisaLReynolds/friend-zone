const db = require("../models");

exports.createLike = async (req, res) => {
  try {
    const { PostId } = req.body;
    const like = await db.Like.create({ UserId: req.user.id, PostId });
    res.status(201).json(like);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
