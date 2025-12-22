const mongoose = require("mongoose");


const categorySchema = new mongoose.Schema(
  {
    // category_id: String,
    category_name: String,
    description: String,
  },

  {
    timestamps: true,
  }
);
const categoryModel = mongoose.model(
  "categoryModel",
  categorySchema,
  "categories"
);

module.exports = categoryModel;
