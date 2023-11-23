// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");

router.post("/login", AuthController.login);

// Protected route
router.get("/admin", AuthController.authenticateToken, (req, res) => {
  // This handler will only be called if the token is valid
  res.json({ message: "Welcome to the admin section!" });
});

module.exports = router;
