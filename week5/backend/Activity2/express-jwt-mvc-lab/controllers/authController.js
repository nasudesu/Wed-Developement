// controllers/authController.js
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");
const config = require("../config");

// Function to handle user login
async function login(req, res) {
  const { username, password } = req.body;
  const user = UserModel.findByUsernameAndPassword(username, password);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user.id }, config.secretKey, {
    expiresIn: "1h",
  });

  res.json({ token });
}

function authenticateToken(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access denied" });

  jwt.verify(token.split(" ")[1], config.secretKey, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
}

module.exports = { login, authenticateToken };
