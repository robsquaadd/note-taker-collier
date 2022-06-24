const path = require("path");
const router = require("express").Router();
const notes = require("../../db/db.json");

router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

router.get("/notes/:id", (req, res) => {
  let results = findByID(req.params.id, notes);
  if (results) {
    res.json(results);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
