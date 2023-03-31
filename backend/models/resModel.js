const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resourceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    links: {
      type: String,
      required: true,
    },
    videos: {
      type: String,
      required: true,
    },
    cheatsheet: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resource", resourceSchema);
