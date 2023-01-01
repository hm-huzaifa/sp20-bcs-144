const mongoose = require("mongoose");
var config = require("config");

const mongoURI = config.get("db");

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;
