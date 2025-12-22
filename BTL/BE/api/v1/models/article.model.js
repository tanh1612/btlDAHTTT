const mongoose = require("mongoose");


const articleSchema = new mongoose.Schema(
  {
    // article_id: String,
    title: String,
    content: String,
    status: {
        type: String,
        default: "PENDING"
    },
    author_id: String,
    category_id: String, 
    thumbnail: String,
  },
  {
    timestamps: true,
  }
);


const articleModel = mongoose.model(
  "articleModel",
  articleSchema,
  "articles"
);

module.exports = articleModel;
