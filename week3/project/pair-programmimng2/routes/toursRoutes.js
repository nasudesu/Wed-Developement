const express = require("express");
const handlers = require("../controllers/toursController");
const router = express.Router();
const { checkRole } = require("../middleware/rolesMiddleware");

router.get("/", handlers.getAllTours);
router.get("/:id", handlers.getTourById);
router.post("/", checkRole("admin"), handlers.createTour);
router.put("/:id", checkRole("admin"), handlers.updateTour);
router.delete("/:id", checkRole("admin"), handlers.deleteTour);

module.exports = router;
