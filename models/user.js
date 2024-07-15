module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.Post);
    User.hasMany(models.Marketplace);
    User.hasMany(models.Comment);
    User.hasMany(models.Like);
  };

  return User;
};
