const uuid = require("uuid");
const services = require("../models/services");

// Get All services
const getAllservices = async (req, res) => {
  try {
    const service = await services.find();
    if (!service) {
      res.status(400).json({ Error: "Cant finde any service.." });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({ Erros: "Cant connect to the server" });
  }
};

// Get Single service by ID
const getserviceById = async (req, res) => {
  try {
    const service = await services.findById(req.params.id);
    if (!service) {
      res.status(400).json({ Error: "Cant find service" });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({ Error: "Cant connect to the server" });
  }
};

// Create a New service
const createservice = async (req, res) => {
  try {
    const { title, text } = req.body;
    if (!title || !text) {
      return res
        .status(400)
        .json({ error: "All fields (title, text) are required" });
    }

    const Service = await services.create({ title, text });

    res.status(201).json(Service);
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(e.message);
  }
};

// Update service by ID
const updateservice = async (req, res) => {
  try {
    const service = await services.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!service) {
      res.status(400).json({ Error: "Cant finde the service" });
    }
    res.json(service);
  } catch (err) {
    res.status(500).json({ Error: "Internal server error" });
  }
};

// Delete service by ID
const deleteservice = async (req, res) => {
  try {
    const service = await services.findByIdAndDelete(req.params.id);
    if (!service) {
      res.status(400).json({ Error: "Cant find service" });
    }
    res.json(service);
  } catch (err) {
    res.status(500).json({ Erros: "Internal server error" });
  }
};

module.exports = {
  getAllservices,
  getserviceById,
  createservice,
  updateservice,
  deleteservice,
};
