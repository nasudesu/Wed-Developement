const services = require("../models/services");

const getAllServices = (req, res) => {
	res.json(services);
};

const getServiceById = (req, res) => {
	const service = services.find((service) => service.id == req.params.id);
	if (service) {
		res.json(service);
	} else {
		res.json({ message: "Service not found" });
	}
};

const createService = (req, res) => {
	const maxIdNum = services.reduce((acc, value) => Math.max(acc, value.id), 0);
	const newService = { ...req.body, id: maxIdNum };
	services.push(newService);
	res.json(newService);
};

const updateService = (req, res) => {
	const serviceId = +req.params.id;
	const serviceIndex = services.findIndex((service) => service.id == serviceId);
	if (serviceIndex !== -1) {
		services[serviceIndex] = { ...req.body, id: serviceId };
		res.json({ message: `Service with id ${serviceId} updated successfully` });
	} else {
		res.json({ message: "Service not found" });
	}
};

const deleteService = (req, res) => {
	const serviceId = req.params.id;
	const serviceIndex = services.findIndex((service) => service.id == serviceId);
	if (serviceIndex !== -1) {
		services.splice(serviceIndex, 1);
		res.json({ message: `Service with id ${serviceId} deleted successfully` });
	} else {
		res.json({ message: "Service not found" });
	}
};

module.exports = {
	getAllServices,
	getServiceById,
	createService,
	updateService,
	deleteService,
};
