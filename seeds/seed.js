const db = require("../models");

const seedDatabase = async () => {
  await db.sequelize.sync({ force: true });

  const users = await db.User.bulkCreate([
    { username: "user1", email: "user1@example.com", password: "password1" },
    { username: "user2", email: "user2@example.com", password: "password2" },
  ]);

  const marketplaces = await db.Marketplace.bulkCreate([
    {
      content: "Item 1",
      image: "image1.jpg",
      price: 10.0,
      userId: users[0].id,
    },
    {
      content: "Item 2",
      image: "image2.jpg",
      price: 20.0,
      userId: users[1].id,
    },
  ]);

  process.exit(0);
};

seedDatabase();
