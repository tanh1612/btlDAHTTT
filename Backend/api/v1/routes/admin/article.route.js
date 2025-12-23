const express = require("express");

const router = express.Router();
const controller = require("../../controllers/admin/article.controller");
const articleValidate = require("../../../../validate/article");


router.get("/",controller.index);
router.put("/update/:article_id",controller.updateStatusArticle);



module.exports = router;