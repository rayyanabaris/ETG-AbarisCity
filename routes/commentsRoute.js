const router = require("express").Router();

const {
  getCommentList,
  createComment,
  updateComment,
  deleteComment,
  getCommentById,
  getSearchComment,
} = require("../controllers/commentsCtrl");

router.get("/", getCommentList);
router.post("/add", createComment);
router.put("/update/:id", updateComment);
router.delete("/delete/:id", deleteComment);
router.get("/:id", getCommentById);
router.get("/search/:search", getSearchComment);

module.exports = router;
