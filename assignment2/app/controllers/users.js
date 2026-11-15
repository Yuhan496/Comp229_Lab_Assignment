
let UsersModel = require('../models/users');

// add user
module.exports.processAdd = async function (req, res, next) {
    try {
        let newUser = UsersModel(req.body);

        let result = await UsersModel.create(newUser);

        res.json({
            success: true,
            message: "User added successfully.",
            data: result
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

// get all users
module.exports.usersList = async function (req, res, next) {
    try {
        let list = await UsersModel.find({});

        res.json({
            success: true,
            message: "Users list retrieved successfully.",
            data: list
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

// get user by ID
module.exports.getByID = async function (req, res, next) {
    try {
        let userId = req.params.id;

        let user = await UsersModel.findOne({
            _id: userId
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        res.json({
            success: true,
            message: "User retrieved successfully.",
            data: user
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

// update user
module.exports.processEdit = async function (req, res, next) {
    try {
        let userId = req.params.id;

        let result = await UsersModel.updateOne(
            { _id: userId },
            { $set: req.body },
            { runValidators: true }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        res.json({
            success: true,
            message: "User updated successfully."
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

// delete user
module.exports.processDelete = async function (req, res, next) {
    try {
        let userId = req.params.id;

        let result = await UsersModel.deleteOne({
            _id: userId
        });

        if (result.deletedCount > 0) {
            res.json({
                success: true,
                message: "User deleted successfully."
            });
        } else {
            res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
};
