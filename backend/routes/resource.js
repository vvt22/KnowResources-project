const express = require("express");
const {
  getResources,
  getResource,
  createResource,
  deleteResource,
  updateResource,
} = require("../controllers/resController");

const router = express.Router();

// GET all resource
router.get("/", getResources);

// GET a single resource
router.get("/:id", getResource);

// POST a new resource
router.post("/", createResource);

// DELETE a resource
router.delete("/:id", deleteResource);

// UPDATE a resource
router.patch("/:id", updateResource);

module.exports = router;
