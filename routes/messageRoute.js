const router = require("express").Router();

const {
  getMessageList,
  createMessage,
  updateMessage,
  deleteMessage,
  getMessageById,
  getSearchMessage,
} = require("../controllers/messageCtrl");

router.get("/", getMessageList);
router.post("/add", createMessage);
router.put("/update/:id", updateMessage);
router.delete("/delete/:id", deleteMessage);
router.get("/:id", getMessageById);
router.get("/search/:search", getSearchMessage);

module.exports = router;
