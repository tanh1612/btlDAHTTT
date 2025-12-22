const mongoose = require("mongoose");


const tagSchema = new mongoose.Schema(
  {
    // tag_id: String,
    tag_name: String,
  },

  {
    timestamps: true,
  }
);
const tagModel = mongoose.model(
  "tagModel",
  tagSchema,
  "tags"
);

module.exports = tagModel;
