const uuid = require("uuid");
const tours = require("../models/tours");

// Get All tours
const getAlltours = async (req, res) => {
  try {
    const tour = await tours.find();
    if (!tour) {
      res.status(400).json({ Error: "Cant find tour..." });
    }
    res.json(tour);
  } catch (error) {
    res.status(500).json({ Error: "Cant server..." });
  }
};

// Get Single tour by ID
const gettourById = async (req, res) => {
  try {
    const tour = await tours.findById(res.params.id);
    if (!tour) {
      res.status(400).json({ Error: "Cant find tour..." });
    }
    res.json(tour);
  } catch (error) {
    res.status(500).json({ Error: "Cant server..." });
  }
};

// Create a New tour
const createtour = async (req, res) => {
  try {
    const { date, title, info, location, duration, cost } = req.body;
    if (!date || !title || !info || !location || !duration || !cost) {
      return res.status(400).json({
        error:
          "All fields (date,title,info,location,duration,cost) are required",
      });
    }
    const tour = await tours.create(req.body);
    res.json(tour);
  } catch (error) {
    res.status(500).json({ Error: "Cant sever..." });
  }
};

// Update tour by ID
const updatetour = async (req, res) => {
  try {
    const tour = await tours.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!tour) {
      res.status(400).json({ Error: "Cant find tour..." });
    }
    res.json(tour);
  } catch (error) {
    res.status(500).json({ Error: "Cant server..." });
  }
};

// Delete tour by ID
const deletetour = async (req, res) => {
  try {
    const tour = await tours.findOneAndDelete({ _id: req.params.id });
    if (!tour) {
      res.status(400).json({ Error: "Cant find tour..." });
    }
    res.json(tour);
  } catch (error) {
    res.status(500).json({ Error: "Cant server..." });
  }
};

module.exports = {
  getAlltours,
  gettourById,
  createtour,
  updatetour,
  deletetour,
};
