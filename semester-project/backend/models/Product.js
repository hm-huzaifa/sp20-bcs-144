const mongoose = require("mongoose");

const { Schema } = mongoose;

var ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String },
  // imageURL: { type: String },
  description: { type: String, required: true },
  // color: [{ name: String }],
  // size: [{ size: String }],
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
