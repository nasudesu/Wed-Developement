const express = require("express");
const app = express();
app.use(express.json());
const bcrypt = require("bcrypt");

const users = [];

// Endpoint for user registration
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  // Check if the username is already taken
  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ message: "Username already taken" });
  }
  const hashPas = await bcrypt.hash(password, 10);
  users.push({ username, password: hashPas });
  res.status(201).json({ message: "User registered successfully" });
});

// Endpoint for getting all users
app.get("/users", (req, res) => {
  const userInformation = users.map((user) => {
    return { username: user.username, password: user.password };
  });
  res.status(200).json(userInformation);
});

// Endpoint for user login
app.get("/login", async (req, res) => {
  const { username, password } = req.body;
  // Check if the user exists
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(400).json({ message: "Cannot find user" });
  }
  // Check if the password is correct
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  res.status(200).json({ message: "Logged in successfully" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
