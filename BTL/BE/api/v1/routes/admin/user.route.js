const express = require("express");

const router = express.Router();
const controller = require("../../controllers/admin/user.controller");
const userValidate = require("../../../../validate/user");


router.get("/",controller.index);
router.post("/create",userValidate.validate,controller.create);


module.exports = router;