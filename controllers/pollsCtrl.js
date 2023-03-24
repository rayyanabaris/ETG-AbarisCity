const Poll = require("../models/pollsModel");
const asyncHandler = require("express-async-handler");

const getPollsList = asyncHandler(async (req, res) => {
  try {
    const allPolls = await Polls.find();
    res.json(allPolls);
  } catch (error) {
    throw new Error(error);
  }
});

const getPollsById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaPolls = await Poll.findById(id);
    res.json(getaPolls);
  } catch (error) {
    throw new Error(error);
  }
});

const createPolls = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const Polls = await Poll.create(req.body);
    res.json(Polls);
  } catch (error) {
    throw new Error(error);
  }
});
const updatePolls = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedPolls = await Poll.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedPolls);
  } catch (error) {
    throw new Error(error);
  }
});
const deletePolls = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedPolls = await Poll.findByIdAndDelete(id);
    res.json(deletedPolls);
  } catch (error) {
    throw new Error(error);
  }
});

const getSearchPolls = asyncHandler(async (req, res) => {
  try {
    const getSearchedPolls = await Poll.find({
      $text: { $search: req.params.search, $diacriticSensitive: true },
    });
    res.json(getSearchedPolls);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getPollsList,
  getPollsById,
  getSearchPolls,
  createPolls,
  updatePolls,
  deletePolls,
};
