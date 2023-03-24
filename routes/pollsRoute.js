const router = require("express").Router();

const {
  getPollsList,
  createPolls,
  updatePolls,
  deletePolls,
  getPollsById,
  getSearchPolls,
} = require("../controllers/pollsCtrl");

router.get("/", getPollsList);
router.post("/add", createPolls);
router.put("/update/:id", updatePolls);
router.delete("/delete/:id", deletePolls);
router.get("/:id", getPollsById);
router.get("/search/:search", getSearchPolls);

module.exports = router;
