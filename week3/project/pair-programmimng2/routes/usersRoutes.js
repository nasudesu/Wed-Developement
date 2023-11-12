const express = require("express");
const handlers = require("../controllers/usersController");
const router = express.Router();
const { checkRole } = require("../middleware/rolesMiddleware");

router.get("/", handlers.getAllUsers);
router.get("/:id", handlers.getUserById);
router.post("/", checkRole("admin"), handlers.createUser);
router.put("/:id", checkRole("admin"), handlers.updateUser);
router.delete("/:id", checkRole("admin"), handlers.deleteUser);

module.exports = router;
