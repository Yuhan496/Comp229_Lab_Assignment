//import mongoose
const mongoose = require('mongoose');

//loads variable from .env file
require('dotenv').config();

//export function to connect to MongoDB
module.exports = async function () {
  try {
    await mongoose.connect(process.env.ATLASDB);
    console.log("You successfully connected to MongoDB!");
    return mongoose;
  } catch (err) {
    console.dir(err);
  }
}
