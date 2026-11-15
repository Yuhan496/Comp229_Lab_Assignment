
let ProjectsModel = require('../models/projects');

// add project
module.exports.processAdd = async function (req, res, next) {
    try {
        let newProject = ProjectsModel(req.body);

        let result = await ProjectsModel.create(newProject);

        res.json({
            success: true,
            message: "Project added successfully.",
            data: result
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

// get all projects
module.exports.projectsList = async function (req, res, next) {
    try {
        let list = await ProjectsModel.find({});

        res.json({
            success: true,
            message: "Projects list retrieved successfully.",
            data: list
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

// get project by ID
module.exports.getByID = async function (req, res, next) {
    try {
        let projectId = req.params.id;
        let project = await ProjectsModel.findOne({ _id: projectId });

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found."
            });
        }

        res.json({
            success: true,
            message: "Project retrieved successfully.",
            data: project
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

// update project
module.exports.processEdit = async function (req, res, next) {
    try {
        let projectId = req.params.id;

        let result = await ProjectsModel.updateOne(
            { _id: projectId },
            { $set: req.body },
            { runValidators: true }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Project not found."
            });
        }

        res.json({
            success: true,
            message: "Project updated successfully."
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

// delete project
module.exports.processDelete = async function (req, res, next) {
    try {
        let projectId = req.params.id;

        let result = await ProjectsModel.deleteOne({
            _id: projectId
        });

        if (result.deletedCount > 0) {
            res.json({
                success: true,
                message: "Project deleted successfully."
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Project not found."
            });
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
};
