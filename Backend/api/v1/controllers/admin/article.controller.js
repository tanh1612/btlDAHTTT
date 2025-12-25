const articleModel = require("../../models/article.model");
const userModel = require("../../models/user.model");
const approvalHistoryModel = require("../../models/approval-history.model");





module.exports.index = async (req, res) => {
  const page = req.query.page;
  const articles = await articleModel.find();
  const find = {
    status: "PENDING"
  }
  let pagination = {
    currentPage: 1,
    limit: 4,
  }

  if(page){
    pagination.currentPage = page;
  }

  const totalArticle = await articleModel.countDocuments(find);
  pagination.totalPage = Math.ceil(totalArticle / pagination.limit);
  pagination.skip = (pagination.totalPage - pagination.currentPage) * pagination.limit;

  let articlePendings = await articleModel.find(find).limit(pagination.limit).skip(pagination.skip);


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
    articlePendings,
    pagination
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


module.exports.articleApproved = async(req,res) => {
  const articleApproved = await articleModel.find(
    {status: {$ne: "PENDING"}}
  );
  if(articleApproved){
    res.json({
      code: 200,
      message: "Lấy danh sách các bài đăng đã duyệt thành công",
      articleApproved
    });
    return;
  }
  res.json({
    code: 400,
    message: "Lấy danh sách các bài đăng không thành công"
  });
}