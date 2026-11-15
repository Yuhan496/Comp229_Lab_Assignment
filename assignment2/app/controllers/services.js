
let ServicesModel = require('../models/services');

// add service
module.exports.processAdd = async function (req, res, next) {
    try {
        let newService = ServicesModel(req.body);

        let result = await ServicesModel.create(newService);

        res.json({
            success: true,
            message: "Service added successfully.",
            data: result
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

// get all services
module.exports.servicesList = async function (req, res, next) {
    try {
        let list = await ServicesModel.find({});

        res.json({
            success: true,
            message: "Services list retrieved successfully.",
            data: list
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

// get service by ID
module.exports.getByID = async function (req, res, next) {
    try {
        let serviceId = req.params.id;

        let service = await ServicesModel.findOne({
            _id: serviceId
        });

        if (!service) {
            return res.status(404).json({
                success: false,
                message: "Service not found."
            });
        }

        res.json({
            success: true,
            message: "Service retrieved successfully.",
            data: service
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

// update service
module.exports.processEdit = async function (req, res, next) {
    try {
        let serviceId = req.params.id;

        let result = await ServicesModel.updateOne(
            { _id: serviceId },
            { $set: req.body },
            { runValidators: true }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Service not found."
            });
        }

        res.json({
            success: true,
            message: "Service updated successfully."
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

// delete service
module.exports.processDelete = async function (req, res, next) {
    try {
        let serviceId = req.params.id;

        let result = await ServicesModel.deleteOne({
            _id: serviceId
        });

        if (result.deletedCount > 0) {
            res.json({
                success: true,
                message: "Service deleted successfully."
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Service not found."
            });
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
};
