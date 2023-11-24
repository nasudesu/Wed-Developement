// controllers/usersController.js

const uuid = require("uuid");
const users = require("../models/users");

// Get All users
const getAllusers = async (req, res) => {
  try {
    const user = await users.find();
    if (user.length === 0) {
      res.status(400).json({ Error: "Cant find users..." });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ Error: "Cant server..." });
  }
};

// Get Single user by ID
const getuserById = async (req, res) => {
  try {
    const user = await users.findById(req.params.id);
    if (!user) {
      res.status(400).json({ Error: "Cant find user..." });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ Error: "Cant server..." });
  }
};

// Create a New user
const createuser = async (req, res) => {
  try {
    const { username, email, role } = req.body;
    if (!username || !email || !role) {
      return res.status(400).json({
        error: "All fields (username,email,role) are required",
      });
    }
    const user = await users.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ Error: "Cant sever..." });
  }
};

// Update user by ID
const updateuser = async (req, res) => {
  try {
    const user = await users.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!user) {
      res.status(400).json({ Error: "Cant find user..." });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ Error: "Cant server..." });
  }
};

// Delete user by ID
const deleteuser = async (req, res) => {
  try {
    const user = await users.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(400).json({ Error: "Cant find user..." });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ Error: "Cant server..." });
  }
};

module.exports = {
  getAllusers,
  getuserById,
  createuser,
  updateuser,
  deleteuser,
};
