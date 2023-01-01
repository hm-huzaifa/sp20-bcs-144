const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const { body, validationResult } = require("express-validator");

router.post("/addproducts", async (req, res) => {
  try {
    const {
      name,
      price,
      brand,
      category,
      image,
      description,
      // color,
      // size,
      // date,
    } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const product = new Product({
      name,
      price,
      brand,
      category,
      image,
      description,
      // color,
      // size,
      // date,
    });

    const saveProduct = await product.save();
    res.json(saveProduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error...!!");
  }
});

router.get("/fetchproducts/bybrand/:brand", async (req, res) => {
  try {
    const products = await Product.find({ brand: req.body.brand });
    console.log(req.body.brand);
    res.json(products);
    console.log(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error...!!");
  }
});

router.get("/fetchproducts/bycategory/:category", async (req, res) => {
  try {
    const products = await Product.find({ category: req.body.category });
    // console.log(req.body.category);
    res.json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error...!!");
  }
});

router.get("/fetchproducts", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error...!!");
  }
});

router.put("/updateProduct/:id", async (req, res) => {
  try {
    const { id, name, price, brand, category, image, description } = req.body;

    const updatedProduct = {};

    updatedProduct._id = id;
    updatedProduct.name = name;
    updatedProduct.price = price;
    updatedProduct.brand = brand;
    updatedProduct.category = category;
    updatedProduct.image = image;
    updatedProduct.description = description;

    const products = await Product.findOneAndUpdate(
      req.params.id,
      { $set: updatedProduct },
      { new: true }
    );
    res.json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error...!!");
  }
});

module.exports = router;
