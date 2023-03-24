const Comments = require("../models/commentsModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

const getCommentList = asyncHandler(async (req, res) => {
  try {
    const allComment = await Comment.find();
    res.json(allComment);
  } catch (error) {
    throw new Error(error);
  }
});

const getCommentById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaComment = await Comments.findById(id);
    res.json(getaComment);
  } catch (error) {
    throw new Error(error);
  }
});

const createComment = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const Comment = await Comments.create(req.body);
    res.json(Comment);
  } catch (error) {
    throw new Error(error);
  }
});
const updateComment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedComment = await Comments.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedComment);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteComment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedComment = await Comments.findByIdAndDelete(id);
    res.json(deletedComment);
  } catch (error) {
    throw new Error(error);
  }
});

const getSearchComment = asyncHandler(async (req, res) => {
  try {
    const getSearchedComment = await Comments.find({
      $text: { $search: req.params.search, $diacriticSensitive: true },
    });
    res.json(getSearchedComment);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getCommentList,
  getCommentById,
  getSearchComment,
  createComment,
  updateComment,
  deleteComment,
};
