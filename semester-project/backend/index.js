const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
var config = require("config");
const port = config.get("port");
const Product = require("./models/Product");
const { body, validationResult } = require("express-validator");

connectToMongo();

const app = express();

app.use(cors());
app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/products"));

app.get("/", (req, res) => {
  res.send("Hello Huz!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
