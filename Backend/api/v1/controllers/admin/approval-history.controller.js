const approvalHistoryModel = require("../../models/approval-history.model");
const articleModel = require("../../models/article.model");


module.exports.index = async (req, res) => {
  const approvalHistory = await approvalHistoryModel.find();
  if (!approvalHistory) {
    res.json({
      code: 200,
      message: "Lấy ra lịch sử bài đăng không thành công",
    });
  }
  res.json({
    code: 200,
    message: "Lấy ra lịch sử bài đăng thành công",
    approvalHistory,
  });
};


