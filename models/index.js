const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

const db = {};

// Import models
db.User = require("./user")(sequelize, Sequelize);
db.Post = require("./post")(sequelize, Sequelize);
db.Comment = require("./comment")(sequelize, Sequelize);
db.Like = require("./like")(sequelize, Sequelize);
db.Marketplace = require("./marketplace")(sequelize, Sequelize);

// Define model relationships
db.User.hasMany(db.Post, { foreignKey: "user_id" });
db.Post.belongsTo(db.User, { foreignKey: "user_id" });

db.User.hasMany(db.Comment, { foreignKey: "user_id" });
db.Comment.belongsTo(db.User, { foreignKey: "user_id" });

db.Post.hasMany(db.Comment, { foreignKey: "post_id" });
db.Comment.belongsTo(db.Post, { foreignKey: "post_id" });

db.User.hasMany(db.Like, { foreignKey: "user_id" });
db.Like.belongsTo(db.User, { foreignKey: "user_id" });

db.Post.hasMany(db.Like, { foreignKey: "PostId" });
db.Like.belongsTo(db.Post, { foreignKey: "PostId" });

db.User.hasMany(db.Marketplace, { foreignKey: "user_id" });
db.Marketplace.belongsTo(db.User, { foreignKey: "user_id" });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
