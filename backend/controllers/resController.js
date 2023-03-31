const Resource = require("../models/resModel");
const mongoose = require("mongoose");

// get all resources
const getResources = async (req, res) => {
  const rs = await Resource.find({}).sort({ createdAt: -1 });

  res.status(200).json(rs);
};

// get a single resource
const getResource = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such resource" });
  }

  const rs = await Resource.findById(id);

  if (!rs) {
    return res.status(404).json({ error: "No such resource" });
  }

  res.status(200).json(rs);
};

// create a new resource
const createResource = async (req, res) => {
  const { title, links, videos } = req.body;

  // add to the database
  try {
    const rs = await Resource.create({ title, links, videos });
    res.status(200).json(rs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a resource
const deleteResource = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such resource" });
  }

  const rs = await Resource.findOneAndDelete({ _id: id });

  if (!rs) {
    return res.status(400).json({ error: "No such resource" });
  }

  res.status(200).json(rs);
};

// update a resource
const updateResource = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such resource" });
  }

  const rs = await Resource.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!rs) {
    return res.status(400).json({ error: "No such resource" });
  }

  res.status(200).json(rs);
};

module.exports = {
  getResources,
  getResource,
  createResource,
  deleteResource,
  updateResource,
};
