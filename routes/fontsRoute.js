const router = require("express").Router();

const {
  getFontList,
  createFont,
  updateFont,
  deleteFont,
  getFontById,
  getSearchFont,
} = require("../controllers/fontsCtrl");

router.get("/", getFontList);
router.post("/add", createFont);
router.put("/update/:id", updateFont);
router.delete("/delete/:id", deleteFont);
router.get("/:id", getFontById);
router.get("/search/:search", getSearchFont);

module.exports = router;
