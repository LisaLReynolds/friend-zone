const db = require("../models");

exports.createComment = async (req, res) => {
  try {
    const { content, PostId } = req.body;
    const comment = await db.Comment.create({
      content,
      UserId: req.user.id,
      PostId,
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
