const express = require("express");
const router = express.Router();
const Movie = require("../../models/movie");

router.get("/movies/delete/:id", async (req, res) => {
  let movie = await Movie.findByIdAndDelete(req.params.id);
  res.redirect("/movies");
});

router.get("/movies/edit/:id", async (req, res) => {
  let movie = await Movie.findById(req.params.id);
  res.render("movies/edit", { movie });
});

router.post("/movies/edit/:id", async (req, res) => {
  let movie = await Movie.findById(req.params.id);
  movie.name = req.body.name;
  movie.genre = req.body.genre;
  movie.year = req.body.year;
  await movie.save();
  res.redirect("/movies");
});

router.get("/movies/add", (req, res) => {
  res.render("movies/add");
});

router.post("/movies/add", async (req, res) => {
  let movie = new Movie(req.body);
  await movie.save();
  res.redirect("/movies");
});

router.get("/movies", async (req, res) => {
  const pageTitle = "List of Movies";
  const movies = await Movie.find();
  res.render("movies/list", { pageTitle, movies });
});

module.exports = router;
