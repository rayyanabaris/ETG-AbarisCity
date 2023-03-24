const Post = require("../models/postModel");
const asyncHandler = require("express-async-handler");

const getPostsList = asyncHandler(async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.json(allPosts);
  } catch (error) {
    throw new Error(error);
  }
});

const getPostsById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaPosts = await Post.findById(id);
    res.json(getaPosts);
  } catch (error) {
    throw new Error(error);
  }
});

const createPosts = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const Posts = await Post.create(req.body);
    res.json(Posts);
  } catch (error) {
    throw new Error(error);
  }
});
const updatePosts = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedPosts = await Post.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedPosts);
  } catch (error) {
    throw new Error(error);
  }
});
const deletePosts = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedPosts = await Post.findByIdAndDelete(id);
    res.json(deletedPosts);
  } catch (error) {
    throw new Error(error);
  }
});

const getSearchPosts = asyncHandler(async (req, res) => {
  try {
    const getSearchedPosts = await Post.find({
      $text: { $search: req.params.search, $diacriticSensitive: true },
    });
    res.json(getSearchedPosts);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getPostsList,
  getPostsById,
  getSearchPosts,
  createPosts,
  updatePosts,
  deletePosts,
};
