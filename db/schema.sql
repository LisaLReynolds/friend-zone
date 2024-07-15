-- Drop the database if it exists
DROP DATABASE IF EXISTS friend_zone;

-- Create the database
CREATE DATABASE friend_zone;

-- Connect to the newly created database
\c friend_zone

-- Create users table
-- CREATE TABLE IF NOT EXISTS users (
--     id SERIAL PRIMARY KEY,
--     username VARCHAR(255) NOT NULL UNIQUE,
--     email VARCHAR(255) NOT NULL UNIQUE,
--     password VARCHAR(255) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Create posts table
-- CREATE TABLE IF NOT EXISTS posts (
--     id SERIAL PRIMARY KEY,
--     content TEXT NOT NULL,
--     image VARCHAR(255),
--     user_id INTEGER NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
-- );

-- -- Create comments table
-- CREATE TABLE IF NOT EXISTS comments (
--     id SERIAL PRIMARY KEY,
--     content TEXT NOT NULL,
--     user_id INTEGER NOT NULL,
--     post_id INTEGER NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
--     FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
-- );

-- -- Create likes table
-- CREATE TABLE IF NOT EXISTS likes (
--     id SERIAL PRIMARY KEY,
--     user_id INTEGER NOT NULL,
--     post_id INTEGER NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
--     FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
-- );

-- -- Create marketplace table
-- CREATE TABLE IF NOT EXISTS marketplace (
--     id SERIAL PRIMARY KEY,
--     content TEXT NOT NULL,
--     image VARCHAR(255),
--     price DECIMAL NOT NULL,
--     user_id INTEGER NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
-- );
