const jwt = require("jsonwebtoken");
const db = require("../models");

module.exports = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).redirect("/login");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await db.User.findByPk(decoded.id);

    if (!user) {
      return res.status(401).redirect("/login");
    }

    req.user = user; // Ensure req.user is being set correctly
    next();
  } catch (err) {
    res.status(401).redirect("/login");
  }
};
