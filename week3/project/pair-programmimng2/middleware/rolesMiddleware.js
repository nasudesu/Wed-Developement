const users = require("../models/users");

// Define role-based middleware
function checkRole(role) {
	return (req, res, next) => {
		const user = users.find((user) => user.id == req.query?.userid);

		if (user?.role === role) next();
		else res.status(403).json({ message: "Access denied" });
	};
}

module.exports = {
	checkRole,
};
