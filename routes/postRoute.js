const router = require("express").Router();

const {
  getPostsList,
  createPosts,
  updatePosts,
  deletePosts,
  getPostsById,
  getSearchPosts,
} = require("../controllers/postCtrl");

router.get("/", getPostsList);
router.post("/add", createPosts);
router.put("/update/:id", updatePosts);
router.delete("/delete/:id", deletePosts);
router.get("/:id", getPostsById);
router.get("/search/:search", getSearchPosts);

module.exports = router;
