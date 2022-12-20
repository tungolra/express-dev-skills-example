var express = require("express");
var router = express.Router();

const skillsCtrl = require("../controllers/skills");

router.get("/", skillsCtrl.index);
router.get("/new", skillsCtrl.newPage);
router.post("/", skillsCtrl.create);
router.get("/:id", skillsCtrl.show);
router.delete("/:id", skillsCtrl.deleteSkill);
router.get("/:id/update", skillsCtrl.updatePage);
router.put("/:id", skillsCtrl.updateSkill);

module.exports = router;
