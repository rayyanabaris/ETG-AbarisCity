const Pages = require("../models/pagesModel");
const asyncHandler = require("express-async-handler");

const getPagesList = asyncHandler(async (req, res) => {
  try {
    const allPages = await Pages.find();
    res.json(allPages);
  } catch (error) {
    throw new Error(error);
  }
});

const getPagesById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaPages = await Pages.findById(id);
    res.json(getaPages);
  } catch (error) {
    throw new Error(error);
  }
});

const createPages = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const pages = await Pages.create(req.body);
    res.json(pages);
  } catch (error) {
    throw new Error(error);
  }
});
const updatePages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedPages = await Pages.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedPages);
  } catch (error) {
    throw new Error(error);
  }
});
const deletePages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedPages = await Pages.findByIdAndDelete(id);
    res.json(deletedPages);
  } catch (error) {
    throw new Error(error);
  }
});

const getSearchPages = asyncHandler(async (req, res) => {
  try {
    const getSearchedPages = await Pages.find({
      $text: { $search: req.params.search, $diacriticSensitive: true },
    });
    res.json(getSearchedPages);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getPagesList,
  getPagesById,
  getSearchPages,
  createPages,
  updatePages,
  deletePages,
};
