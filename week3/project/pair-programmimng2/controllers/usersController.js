const users = require("../models/users");

const getAllUsers = (req, res) => {
	res.json(users);
};

const getUserById = (req, res) => {
	const user = users.find((user) => user.id == req.params.id);
	if (user) {
		res.json(user);
	} else {
		res.json({ message: "User not found" });
	}
};

const createUser = (req, res) => {
	const maxIdNum = users.reduce((acc, value) => Math.max(acc, value.id), 0);
	const newUser = { ...req.body, id: maxIdNum };
	users.push(newUser);
	res.json(newUser);
};

const updateUser = (req, res) => {
	const UserId = +req.params.id;
	const UserIndex = users.findIndex((user) => user.id == UserId);
	if (UserIndex !== -1) {
		users[UserIndex] = { ...req.body, id: UserId };
		res.json({ message: `User with id ${UserId} updated successfully` });
	} else {
		res.json({ message: "User not found" });
	}
};

const deleteUser = (req, res) => {
	const UserId = req.params.id;
	const UserIndex = users.findIndex((user) => user.id == UserId);
	if (UserIndex !== -1) {
		users.splice(UserIndex, 1);
		res.json({ message: `User with id ${UserId} deleted successfully` });
	} else {
		res.json({ message: "User not found" });
	}
};

module.exports = {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};
