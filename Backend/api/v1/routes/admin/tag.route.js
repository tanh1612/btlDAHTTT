const express = require("express");

const router = express.Router();
const controller = require("../../controllers/admin/tag.controller");

router.get("/",controller.index);
router.post("/create",controller.create);
router.put("/update/:tag_id",controller.update);
router.delete("/delete/:tag_id",controller.delete);





module.exports = router;