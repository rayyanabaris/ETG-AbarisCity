const router = require("express").Router();

const {
  getrss_feedList,
  createrss_feed,
  updaterss_feed,
  deleterss_feed,
  getrss_feedById,
  getSearchrss_feed,
} = require("../controllers/rss-feedCtrl");

router.get("/", getrss_feedList);
router.post("/add", createrss_feed);
router.put("/update/:id", updaterss_feed);
router.delete("/delete/:id", deleterss_feed);
router.get("/:id", getrss_feedById);
router.get("/search/:search", getSearchrss_feed);

module.exports = router;
