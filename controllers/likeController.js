const db = require("../models");

exports.createLike = async (req, res) => {
  try {
    const { PostId } = req.body;
    const userId = req.user.id;

    // Check if the user has already liked the post
    const existingLike = await db.Like.findOne({
      where: { PostId, user_id: userId },
    });

    if (existingLike) {
      return res
        .status(400)
        .json({ error: "You have already liked this post" });
    }

    await db.Like.create({ PostId, user_id: userId });

    // Get the updated like count
    const likesCount = await db.Like.count({ where: { PostId } });

    res.status(201).json({ likesCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
