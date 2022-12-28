const express = require("express");
const app = express();
const connectToMongo = require("./db");
var config = require("config");

const port = config.get("port");

app.get("/", (req, res) => {
  res.send("...QUIZTYK...");
});

// Routes
app.use("/api/auth", require("./routes/auth.js"));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
