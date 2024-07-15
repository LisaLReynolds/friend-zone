const sequelize = require("../config/connection");
const bcrypt = require("bcryptjs");
const db = require("../models");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Seed Users
  const users = await db.User.bulkCreate(
    [
      {
        username: "john_doe",
        email: "john@example.com",
        password: await bcrypt.hash("password123", 10),
      },
      {
        username: "jane_doe",
        email: "jane@example.com",
        password: await bcrypt.hash("password123", 10),
      },
    ],
    {
      individualHooks: true,
      returning: true,
    }
  );

  // Seed Posts
  const posts = await db.Post.bulkCreate([
    {
      content: "This is my first post!",
      image: "image1.jpg",
      user_id: users[0].id,
    },
    {
      content: "Hello world!",
      image: "image2.jpg",
      user_id: users[1].id,
    },
  ]);

  // Seed Comments
  const comments = await db.Comment.bulkCreate([
    {
      content: "Nice post!",
      user_id: users[1].id,
      post_id: posts[0].id,
    },
    {
      content: "Thanks for sharing!",
      user_id: users[0].id,
      post_id: posts[1].id,
    },
  ]);

  // Seed Likes
  const likes = await db.Like.bulkCreate([
    {
      user_id: users[0].id,
      post_id: posts[1].id,
    },
    {
      user_id: users[1].id,
      post_id: posts[0].id,
    },
  ]);

  // Seed Marketplace Items
  const marketplaceItems = await db.Marketplace.bulkCreate([
    {
      content: "Selling a bicycle",
      image: "bicycle.jpg",
      price: 100.0,
      user_id: users[0].id,
    },
    {
      content: "Selling a laptop",
      image: "laptop.jpg",
      price: 500.0,
      user_id: users[1].id,
    },
  ]);

  console.log("Database seeded!");
  process.exit(0);
};

seedDatabase();
