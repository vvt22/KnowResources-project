const express = require("express");
const Resource = require("../models/resModel");

const router = express.Router();

// GET all resource
router.get("/", (req, res) => {
  res.json({ mssg: "GET all resource" });
});

// GET a single resource
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single resource" });
});

// POST a new resource
router.post("/", async (req, res) => {
  const { title, links, videos } = req.body;

  try {
    const rS = await Resource.create({ title, links, videos });
    res.status(200).json(rS);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE a resource
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a resource" });
});

// UPDATE a resource
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a resource" });
});

module.exports = router;
