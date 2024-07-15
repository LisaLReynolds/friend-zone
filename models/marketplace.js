module.exports = (sequelize, DataTypes) => {
  const Marketplace = sequelize.define(
    "Marketplace",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "marketplace",
      timestamps: false,
    }
  );

  return Marketplace;
};
