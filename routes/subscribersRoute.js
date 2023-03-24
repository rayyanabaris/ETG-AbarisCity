const router = require("express").Router();

const {
  getSubscriberList,
  createSubscriber,
  updateSubscriber,
  deleteSubscriber,
  getSubscriberById,
  getSearchSubscriber,
} = require("../controllers/subscribersCtrl");

router.get("/", getSubscriberList);
router.post("/add", createSubscriber);
router.put("/update/:id", updateSubscriber);
router.delete("/delete/:id", deleteSubscriber);
router.get("/:id", getSubscriberById);
router.get("/search/:search", getSearchSubscriber);

module.exports = router;
