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
        email: "john.doe@example.com",
        password: await bcrypt.hash("password123", 10),
      },
      {
        username: "jane_smith",
        email: "jane.smith@example.com",
        password: await bcrypt.hash("password123", 10),
      },
      {
        username: "michael_brown",
        email: "michael.brown@example.com",
        password: await bcrypt.hash("password123", 10),
      },
      {
        username: "emily_davis",
        email: "emily.davis@example.com",
        password: await bcrypt.hash("password123", 10),
      },
      {
        username: "david_jones",
        email: "david.jones@example.com",
        password: await bcrypt.hash("password123", 10),
      },
      {
        username: "sarah_wilson",
        email: "sarah.wilson@example.com",
        password: await bcrypt.hash("password123", 10),
      },
      {
        username: "chris_martinez",
        email: "chris.martinez@example.com",
        password: await bcrypt.hash("password123", 10),
      },
      {
        username: "lisa_rodriguez",
        email: "lisa.rodriguez@example.com",
        password: await bcrypt.hash("password123", 10),
      },
      {
        username: "daniel_taylor",
        email: "daniel.taylor@example.com",
        password: await bcrypt.hash("password123", 10),
      },
      {
        username: "karen_lee",
        email: "karen.lee@example.com",
        password: await bcrypt.hash("password123", 10),
      },
      {
        username: "joshua_harris",
        email: "joshua.harris@example.com",
        password: await bcrypt.hash("password123", 10),
      },
      {
        username: "sophia_clark",
        email: "sophia.clark@example.com",
        password: await bcrypt.hash("password123", 10),
      },
      {
        username: "matthew_lopez",
        email: "matthew.lopez@example.com",
        password: await bcrypt.hash("password123", 10),
      },
      {
        username: "olivia_wright",
        email: "olivia.wright@example.com",
        password: await bcrypt.hash("password123", 10),
      },
      {
        username: "james_scott",
        email: "james.scott@example.com",
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
    {
      content: "Enjoying a beautiful day at the park.",
      image: "park.jpg",
      user_id: users[2].id,
    },
    {
      content: "Just finished a 5k run!",
      image: "run.jpg",
      user_id: users[3].id,
    },
    {
      content: "Check out my new painting.",
      image: "painting.jpg",
      user_id: users[4].id,
    },
    {
      content: "Cooking up a storm in the kitchen.",
      image: "cooking.jpg",
      user_id: users[5].id,
    },
    {
      content: "Loving this new book I'm reading.",
      image: "book.jpg",
      user_id: users[6].id,
    },
    {
      content: "Had a great time at the concert last night.",
      image: "concert.jpg",
      user_id: users[7].id,
    },
    {
      content: "Traveling to new places is the best.",
      image: "travel.jpg",
      user_id: users[8].id,
    },
    {
      content: "Starting a new hobby: photography.",
      image: "photography.jpg",
      user_id: users[9].id,
    },
    {
      content: "Gardening is so relaxing.",
      image: "gardening.jpg",
      user_id: users[10].id,
    },
    {
      content: "Just adopted a new puppy!",
      image: "puppy.jpg",
      user_id: users[11].id,
    },
    {
      content: "Learning to play the guitar.",
      image: "guitar.jpg",
      user_id: users[12].id,
    },
    {
      content: "Watching the sunset from my balcony.",
      image: "sunset.jpg",
      user_id: users[13].id,
    },
    {
      content: "Trying out some new yoga poses.",
      image: "yoga.jpg",
      user_id: users[14].id,
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
    {
      content: "Looks like a great day at the park!",
      user_id: users[3].id,
      post_id: posts[2].id,
    },
    {
      content: "Great job on the run!",
      user_id: users[2].id,
      post_id: posts[3].id,
    },
    {
      content: "Your painting is amazing!",
      user_id: users[5].id,
      post_id: posts[4].id,
    },
    {
      content: "Yum! What did you cook?",
      user_id: users[4].id,
      post_id: posts[5].id,
    },
    {
      content: "What book are you reading?",
      user_id: users[7].id,
      post_id: posts[6].id,
    },
    {
      content: "That concert was awesome!",
      user_id: users[6].id,
      post_id: posts[7].id,
    },
    {
      content: "Traveling is so fun!",
      user_id: users[9].id,
      post_id: posts[8].id,
    },
    {
      content: "Can't wait to see your photos.",
      user_id: users[8].id,
      post_id: posts[9].id,
    },
    {
      content: "Gardening is indeed relaxing.",
      user_id: users[11].id,
      post_id: posts[10].id,
    },
    {
      content: "Your puppy is adorable!",
      user_id: users[10].id,
      post_id: posts[11].id,
    },
    {
      content: "Good luck with the guitar!",
      user_id: users[13].id,
      post_id: posts[12].id,
    },
    {
      content: "Beautiful sunset!",
      user_id: users[12].id,
      post_id: posts[13].id,
    },
    {
      content: "Yoga is great for relaxation.",
      user_id: users[14].id,
      post_id: posts[14].id,
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
    {
      user_id: users[2].id,
      post_id: posts[3].id,
    },
    {
      user_id: users[3].id,
      post_id: posts[2].id,
    },
    {
      user_id: users[4].id,
      post_id: posts[5].id,
    },
    {
      user_id: users[5].id,
      post_id: posts[4].id,
    },
    {
      user_id: users[6].id,
      post_id: posts[7].id,
    },
    {
      user_id: users[7].id,
      post_id: posts[6].id,
    },
    {
      user_id: users[8].id,
      post_id: posts[9].id,
    },
    {
      user_id: users[9].id,
      post_id: posts[8].id,
    },
    {
      user_id: users[10].id,
      post_id: posts[11].id,
    },
    {
      user_id: users[11].id,
      post_id: posts[10].id,
    },
    {
      user_id: users[12].id,
      post_id: posts[13].id,
    },
    {
      user_id: users[13].id,
      post_id: posts[12].id,
    },
    {
      user_id: users[14].id,
      post_id: posts[14].id,
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
    {
      content: "Selling a guitar",
      image: "guitar.jpg",
      price: 150.0,
      user_id: users[2].id,
    },
    {
      content: "Selling a sofa",
      image: "sofa.jpg",
      price: 200.0,
      user_id: users[3].id,
    },
    {
      content: "Selling a coffee maker",
      image: "coffee_maker.jpg",
      price: 30.0,
      user_id: users[4].id,
    },
    {
      content: "Selling a bicycle",
      image: "bicycle.jpg",
      price: 120.0,
      user_id: users[5].id,
    },
    {
      content: "Selling a desk",
      image: "desk.jpg",
      price: 70.0,
      user_id: users[6].id,
    },
    {
      content: "Selling a bookshelf",
      image: "bookshelf.jpg",
      price: 80.0,
      user_id: users[7].id,
    },
    {
      content: "Selling a chair",
      image: "chair.jpg",
      price: 40.0,
      user_id: users[8].id,
    },
    {
      content: "Selling a camera",
      image: "camera.jpg",
      price: 300.0,
      user_id: users[9].id,
    },
    {
      content: "Selling a microwave",
      image: "microwave.jpg",
      price: 50.0,
      user_id: users[10].id,
    },
    {
      content: "Selling a blender",
      image: "blender.jpg",
      price: 25.0,
      user_id: users[11].id,
    },
    {
      content: "Selling a television",
      image: "television.jpg",
      price: 250.0,
      user_id: users[12].id,
    },
    {
      content: "Selling a printer",
      image: "printer.jpg",
      price: 60.0,
      user_id: users[13].id,
    },
    {
      content: "Selling a table",
      image: "table.jpg",
      price: 90.0,
      user_id: users[14].id,
    },
  ]);

  console.log("Database seeded!");
  process.exit(0);
};

seedDatabase();
