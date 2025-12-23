module.exports.validate = (req, res, next) => {
  if (!req.body.title) {
    res.json({
      code: 400,
      message: "Tên bài viết không được để trống",
    });
    return;
  } else if (!req.body.content) {
    res.json({
      code: 400,
      message: "Nội dung nội dung bài viết không được để trống",
    });
    return;
  }
  else if (!req.body.category_id) {
    res.json({
      code: 400,
      message: "Hãy chọn danh mục cho bài viết",
    });
    return;
  }
  next();
};
