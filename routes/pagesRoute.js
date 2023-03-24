const router = require("express").Router();

const {
  getPagesList,
  createPages,
  updatePages,
  deletePages,
  getPagesById,
  getSearchPages,
} = require("../controllers/pagesCtrl");

router.get("/", getPagesList);
router.post("/add", createPages);
router.put("/update/:id", updatePages);
router.delete("/delete/:id", deletePages);
router.get("/:id", getPagesById);
router.get("/search/:search", getSearchPages);

module.exports = router;
