const mongoose = require("mongoose");
require('dotenv').config();

//const mongoURL = "mongodb://localhost:27017/hotels";
// const mongoURL = process.env.MONGODB_URL_LOCAL // Replace 'mydatabase' with your database name
const mongoURL = process.env.MONGODB_URL;

const db = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("DB Connected..");
  } catch (e) {
    console.log(e);
  }
};

db(mongoose.connection);
module.exports = db;