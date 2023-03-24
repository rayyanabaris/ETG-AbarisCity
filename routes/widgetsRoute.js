const router = require("express").Router();

const {
  getWidgetsList,
  createWidgets,
  updateWidgets,
  deleteWidgets,
  getWidgetsById,
  getSearchWidgets,
} = require("../controllers/widgetsCtrl");

router.get("/", getWidgetsList);
router.post("/add", createWidgets);
router.put("/update/:id", updateWidgets);
router.delete("/delete/:id", deleteWidgets);
router.get("/:id", getWidgetsById);
router.get("/search/:search", getSearchWidgets);

module.exports = router;
