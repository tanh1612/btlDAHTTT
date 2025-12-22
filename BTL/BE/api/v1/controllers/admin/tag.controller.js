const tagModel = require("../../models/tag.model");

module.exports.index = async (req, res) => {
  const tags = await tagModel.find();
  if (!tags) {
    res.json({
      code: 400,
      message: "Lấy danh sách các thẻ tag không thành công",
    });
    return;
  }
  res.json({
    code: 200,
    message: "Lấy danh sách các thẻ tag thành công",
    tags,
  });
};

module.exports.create = async (req, res) => {
  const tagName = req.body.tag_name;
  if (!tagName) {
    res.json({
      code: 400,
      massage: "Tên thẻ tag không được để trống",
    });
    return;
  }

  const newTag = new tagModel({
    tag_name: tagName,
  });
  await newTag.save();
  res.json({
    code: 200,
    message: "Tạo mới thẻ tag thành công",
  });
};

module.exports.update = async (req, res) => {
  const tagId = req.params.tag_id;
  const tagName = req.body.tag_name;
  if (!tagId) {
    res.json({
      code: 400,
      message: "Cập nhật thẻ tag không thành công",
    });
    return;
  }
  await tagModel.updateOne(
    {
      _id: tagId,
    },
    {
      tag_name: tagName,
    }
  );
  res.json({
    code: 200,
    message: "Cập nhật thẻ tag thành công",
  });
};

module.exports.delete = async (req, res) => {
  const tagId = req.params.tag_id;
  if (!tagId) {
    res.json({
      code: 400,
      message: "Xóa thẻ tag không thành công",
    });
    return;
  }
  await tagModel.deleteOne({
    _id: tagId
  });
  res.json({
    code: 200,
    message: "Xóa thẻ tag thành công",
  });
};
