const mongoose = require("mongoose");
var config = require("config");

const mongoURI = config.get("db");

const connectToMongo = () => {
  mongoose.connect(mongoURL, () => {
    console.log("MongoDB connected successfully");
  });
};

module.exports = connectToMongo;
