const express = require("express");

const router = express.Router();
const controller = require("../../controllers/client/article.controller");
const articleValidate = require("../../../../validate/article");


router.get("/",controller.index);
router.get("/:article_id",controller.idArticle);
router.get("/category/:category_id",controller.idCategory);

router.post("/create",articleValidate.validate,controller.create);
router.put("/update/:article_id",articleValidate.validate,controller.updateArticle);





module.exports = router;