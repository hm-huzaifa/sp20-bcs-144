const express = require("express");

const app = express();

// setup ejs as view engine
app.set("view engine", "ejs");

// setup public folder as static files
app.use(express.static("public"));

// sample of an api route
app.get("/api/products", function (request, respnse) {
  respnse.send(["Pen", "Pencil"]);
});

// homepage
app.get("/", function (req, res) {
  res.render("index");
});

app.listen(2000, function () {
  console.log("Listening on 2000");
});
