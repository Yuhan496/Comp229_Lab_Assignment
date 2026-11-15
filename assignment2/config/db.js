//import mongoose
const mongoose = require('mongoose');

//loads variable from .env file
require('dotenv').config();

//export function to connect to MongoDB
module.exports = async function () {
    if (!process.env.ATLASDB) {
        throw new Error("ATLASDB environment variable is missing.");
    }

    await mongoose.connect(process.env.ATLASDB, {
        dbName: 'Midterm',
        serverSelectionTimeoutMS: 10000
    });

    console.log(
        "Successfully connected to MongoDB: " +
        mongoose.connection.name
    );
};


