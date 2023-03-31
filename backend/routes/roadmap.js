const express = require("express");

const router = express.Router();

// GET all roadmap
router.get("/", (req, res) => {
  res.json({ mssg: "GET all roadmap" });
});

// GET a single roadmap
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single roadmap" });
});

// POST a new roadmap
router.post("/", (req, res) => {
  res.json({ mssg: "POST a new roadmap" });
});

// DELETE a roadmap
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a roadmap" });
});

// UPDATE a roadmap
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a roadmap" });
});

module.exports = router;
