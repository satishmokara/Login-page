CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

-- Insert a test user
INSERT INTO users (email, password) VALUES ('admin@example.com', 'password123');

