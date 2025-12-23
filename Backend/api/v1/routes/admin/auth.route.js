const express = require("express");

const router = express.Router();
const controller = require("../../controllers/admin/auth.controller");
const authValidate = require("../../../../validate/auth");

router.post("/",authValidate.validate,controller.login);


module.exports = router;