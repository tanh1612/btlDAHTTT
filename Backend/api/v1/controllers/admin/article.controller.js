const articleModel = require("../../models/article.model");
const userModel = require("../../models/user.model");
const approvalHistoryModel = require("../../models/approval-history.model");





module.exports.index = async (req, res) => {
  const articles = await articleModel.find();
  let articlePendings = await articleModel.find({
    status: "PENDING"
  });

  for(let i=0;i<articlePendings.length;i++){
    const author = await userModel.findOne({
      _id: articlePendings[i].author_id
    });
    articlePendings[i] = articlePendings[i].toObject();

    articlePendings[i].author_email = author.email;
  }

  if(!articles){
    res.json({
      code: 400,
      message: "Lấy danh sách bài viết không thành công"
    });
    return;
  }
  res.json({
    code: 200,
    message: "Lấy ra danh sách bài viết thành công",
    articles,
    articlePendings
  });
};


module.exports.updateStatusArticle = async (req, res) => {
  
  const articleId = req.params.article_id;
  const { approver_id, action, reason } = req.body;
  if (!articleId && !approver_id && !action) {
    res.json({
      code: 400,
      message: "Cập nhật bài viết không thành công",
    });
  } else {
    // cập nhật lại trạng thái của article
    await articleModel.updateOne({
      _id: articleId
    },{
      status: action
    });

    // lưu trạng thái cập nhật và lịch sử duyệt bài
    const newApprovalHistoryModel = new approvalHistoryModel({
      article_id: articleId,
      approver_id,
      action,
      reason: reason ? reason : "",
      action_time: Date.now(),
    });
    await newApprovalHistoryModel.save();

    

    res.json({
      code: 200,
      message: "Cập nhật trạng thái thành công",
    });
  }
}


