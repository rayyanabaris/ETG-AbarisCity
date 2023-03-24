const router = require("express").Router();

const {
  getAdSpaceList,
  createAdSpace,
  updateAdSpace,
  deleteAdSpace,
  getAdSpaceById,
  getSearchAdSpace,
} = require("../controllers/adspacesCtrl");

router.get("/", getAdSpaceList);
router.post("/add", createAdSpace);
router.put("/update/:id", updateAdSpace);
router.delete("/delete/:id", deleteAdSpace);
router.get("/:id", getAdSpaceById);
router.get("/search/:search", getSearchAdSpace);

module.exports = router;
