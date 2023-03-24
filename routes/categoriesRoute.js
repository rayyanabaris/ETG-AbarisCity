const router = require("express").Router();

const {
  getCategoriesList,
  createCategories,
  updateCategories,
  deleteCategories,
  getCategoriesById,
  getSearchCategories,
} = require("../controllers/categoriesCtrl");

router.get("/", getCategoriesList);
router.post("/add", createCategories);
router.put("/update/:id", updateCategories);
router.delete("/delete/:id", deleteCategories);
router.get("/:id", getCategoriesById);
router.get("/search/:search", getSearchCategories);

module.exports = router;
