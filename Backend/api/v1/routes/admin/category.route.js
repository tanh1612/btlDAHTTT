const express = require("express");

const router = express.Router();
const controller = require("../../controllers/admin/category.controller");
const categoryValidate = require("../../../../validate/category");

router.get("/",controller.index);
router.post("/create",controller.create);
router.put("/update/:category_id",categoryValidate.validate,controller.update);
router.delete("/delete/:category_id",controller.delete);




module.exports = router;