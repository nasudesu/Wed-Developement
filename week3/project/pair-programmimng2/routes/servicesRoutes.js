const express = require("express");
const handlers = require("../controllers/servicesController");
const router = express.Router();
const { checkRole } = require("../middleware/rolesMiddleware");

router.get("/", handlers.getAllServices);
router.get("/:id", handlers.getServiceById);
router.post("/", checkRole("admin"), handlers.createService);
router.put("/:id", checkRole("admin"), handlers.updateService);
router.delete("/:id", checkRole("admin"), handlers.deleteService);

module.exports = router;
