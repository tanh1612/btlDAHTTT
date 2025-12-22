const express = require("express");

const router = express.Router();
const controller = require("../../controllers/client/auth.controller");
const authValidate = require("../../../../validate/auth");

router.post("/login",authValidate.validate,controller.login);
router.post("/register",authValidate.validate,controller.register);



module.exports = router;