module.exports = (sequelize, DataTypes) => {
  const Marketplace = sequelize.define("Marketplace", {
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.FLOAT,
  });

  Marketplace.associate = (models) => {
    Marketplace.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };

  return Marketplace;
};
