const router = require("express").Router();

const {
  getLanguagesList,
  createLanguages,
  updateLanguages,
  deleteLanguages,
  getLanguagesById,
  getSearchLanguages,
} = require("../controllers/languagesCtrl");

router.get("/", getLanguagesList);
router.post("/add", createLanguages);
router.put("/update/:id", updateLanguages);
router.delete("/delete/:id", deleteLanguages);
router.get("/:id", getLanguagesById);
router.get("/search/:search", getSearchLanguages);

module.exports = router;
