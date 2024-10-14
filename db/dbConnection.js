const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log(" db is Connected!"));

module.exports = dbConnection;
