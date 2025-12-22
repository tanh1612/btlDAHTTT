const categoryModel = require("../../models/category.model");

// lấy ra danh sách các danh mục
module.exports.index = async (req, res) => {
  const categories = await categoryModel.find({});
  if (!categories) {
    res.json({
      code: 200,
      message: "Lấy ra danh mục thất bại",
    });
    return;
  }
  res.json({
    code: 200,
    message: "Lấy ra danh mục thành công",
    categories,
  });
};

// thêm mới danh mục
module.exports.create = async (req, res) => {
  const { category_name, description } = req.body;
  if (!category_name) {
    res.json({
      code: 200,
      message: "Không được để trống tên danh mục",
    });
  } else if (!description) {
    res.json({
      code: 200,
      message: "Không được để trống mô tả danh mục",
    });
  } else {
    const newCategory = categoryModel({
      category_name,
      description,
    });
    await newCategory.save();
    res.json({
      code: 200,
      message: "Tạo mới danh mục thành công",
    });
  }
};

// chỉnh sửa danh mục
module.exports.update = async (req, res) => {
  const {category_name,description} = req.body;
  const categoryId = req.params.category_id;
  if (!categoryId) {
    res.json({
      code: 400,
      message: "Cập nhật danh mục không thành công",
    });
    return;
  }
  await categoryModel.updateOne({
    _id: categoryId
  },{
    category_name,
    description
  })
  res.json({
    code: 200,
    message: "Cập nhật danh mục thành công",
  });
};



module.exports.delete = async (req, res) => {
  const categoryId = req.params.category_id;
  if(!categoryId){
    res.json({
      code: 400,
      message: "Xóa danh mục không thành công"
    });
    return;
  }
  await categoryModel.deleteOne({
    _id: categoryId
  });
  res.json({
    code: 200,
    message: "Xóa danh mục thành công"
  });
}