const articleModel = require("../../models/article.model");
const categoryModel = require("../../models/category.model");
const userModel = require("../../models/user.model");
const tagModel = require("../../models/tag.model");

// hiển thị danh sách bài viết
module.exports.index = async (req, res) => {
  const articles = await articleModel.find({
    status: "APPROVED",
  });
  res.json({
    code: 200,
    message: "Danh sách các bài viết",
    articles,
  });
};

// hiển thị chi tiết bài viết theo id
module.exports.idArticle = async (req, res) => {
  const articleId = req.params.article_id;
  const article = await articleModel.findOne({
    _id: articleId,
    status: "APPROVED",

  });
  if (!article) {
    res.json({
      code: 400,
      message: "Không có bài viết",
    });
    return;
  }
  res.json({
    code: 200,
    message: "Lấy ra bài viết thành công",
    article,
  });
};

// hiển thị danh sách bài viết theo danh mục

module.exports.idCategory = async (req, res) => {
  const idCategory = req.params.category_id;
  const articles = await articleModel.find({
    category_id: idCategory,
    status: "APPROVED",

  });
  if (!articles) {
    res.json({
      code: 400,
      message: "Không tìm thấy danh sách bài viết thuộc danh mục này",
    });
    return;
  }
  res.json({
    code: 200,
    message: "Lấy thành công danh sách các danh mục",
    articles
  });
};

// tạo mới bài viết
module.exports.create = async (req, res) => {
  const { title, content, author_id, category_id,thumbnail } = req.body;
  const user = await userModel.findOne({
    _id: author_id,
    status: "active",
  });

  const category = await categoryModel.findOne({
    _id: category_id,
  });

  if (!user || !category) {
    res.json({
      code: 400,
      message: "Tạo mới bài viết không thành công vì thông tin người dùng và danh mục chưa có",
    });
  } else {
    const newArticle = await articleModel({
      title,
      content,
      author_id,
      category_id,
      thumbnail
    });
    newArticle.save();
    const newTag = new tagModel({
      tag_name: title
    });
    await newTag.save();
    res.json({
      code: 200,
      message: "Tạo mới bài viết thành công",
    });
  }
};


// cập nhật bài viết
module.exports.updateArticle = async (req, res) => {
  const { title, content, author_id, category_id } = req.body;
  const articleId = req.params.article_id;
  const user = await userModel.findOne({
    _id: author_id,
    status: "active",
  });

  const category = await categoryModel.findOne({
    _id: category_id,
  });

  if (!user || !category) {
    res.json({
      code: 400,
      message: "Cập nhật bài viết không thành công vì thông tin người dùng và danh mục chưa có",
    });
  } else {
    await articleModel.updateOne({
      _id: articleId
    },{
      title,
      content
    });
    
    res.json({
      code: 200,
      message: "Cập nhật bài viết thành công",
    });
  }
}