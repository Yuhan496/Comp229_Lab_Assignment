
let ReferencesModel = require('../models/references');

// add reference
module.exports.processAdd = async function (req, res, next) {
    try {
        let newReference = ReferencesModel(req.body);

        let result = await ReferencesModel.create(newReference);

        res.json({
            success: true,
            message: "Reference added successfully.",
            data: result
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

// get all references
module.exports.referencesList = async function (req, res, next) {
    try {
        let list = await ReferencesModel.find({});

        res.json({
            success: true,
            message: "References list retrieved successfully.",
            data: list
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

// get reference by ID
module.exports.getByID = async function (req, res, next) {
    try {
        let referenceId = req.params.id;

        let reference = await ReferencesModel.findOne({
            _id: referenceId
        });

        if (!reference) {
            return res.status(404).json({
                success: false,
                message: "Reference not found."
            });
        }

        res.json({
            success: true,
            message: "Reference retrieved successfully.",
            data: reference
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

// update reference
module.exports.processEdit = async function (req, res, next) {
    try {
        let referenceId = req.params.id;

        let result = await ReferencesModel.updateOne(
            { _id: referenceId },
            { $set: req.body },
            { runValidators: true }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Reference not found."
            });
        }

        res.json({
            success: true,
            message: "Reference updated successfully."
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

// delete reference
module.exports.processDelete = async function (req, res, next) {
    try {
        let referenceId = req.params.id;

        let result = await ReferencesModel.deleteOne({
            _id: referenceId
        });

        if (result.deletedCount > 0) {
            res.json({
                success: true,
                message: "Reference deleted successfully."
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Reference not found."
            });
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
};
