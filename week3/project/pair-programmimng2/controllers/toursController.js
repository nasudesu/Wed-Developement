const tours = require("../models/tours");

const getAllTours = (req, res) => {
	res.json(tours);
};

const getTourById = (req, res) => {
	const tour = tours.find((tour) => tour.id == req.params.id);
	if (tour) {
		res.json(tour);
	} else {
		res.json({ message: "Tour not found" });
	}
};

const createTour = (req, res) => {
	const maxIdNum = tours.reduce((acc, value) => Math.max(acc, value.id), 0);
	const newTour = { ...req.body, id: maxIdNum };
	tours.push(newTour);
	res.json(newTour);
};

const updateTour = (req, res) => {
	const tourId = +req.params.id;
	const tourIndex = tours.findIndex((tour) => tour.id == tourId);
	if (tourIndex !== -1) {
		tours[tourIndex] = { ...req.body, id: tourId };
		res.json({ message: `Tour with id ${tourId} updated successfully` });
	} else {
		res.json({ message: "Tour not found" });
	}
};

const deleteTour = (req, res) => {
	const tourId = req.params.id;
	const tourIndex = tours.findIndex((tour) => tour.id == tourId);
	if (tourIndex !== -1) {
		tours.splice(tourIndex, 1);
		res.json({ message: `Tour with id ${tourId} deleted successfully` });
	} else {
		res.json({ message: "Tour not found" });
	}
};

module.exports = {
	getAllTours,
	getTourById,
	createTour,
	updateTour,
	deleteTour,
};
