const Fonts = require("../models/fontsModel");
const asyncHandler = require("express-async-handler");

const getFontList = asyncHandler(async (req, res) => {
  try {
    const allFont = await Fonts.find();
    res.json(allFont);
  } catch (error) {
    throw new Error(error);
  }
});

const getFontById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaFont = await Fonts.findById(id);
    res.json(getaFont);
  } catch (error) {
    throw new Error(error);
  }
});

const createFont = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const Font = await Fonts.create(req.body);
    res.json(Font);
  } catch (error) {
    throw new Error(error);
  }
});
const updateFont = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedFont = await Fonts.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedFont);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteFont = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedFont = await Fonts.findByIdAndDelete(id);
    res.json(deletedFont);
  } catch (error) {
    throw new Error(error);
  }
});

const getSearchFont = asyncHandler(async (req, res) => {
  try {
    const getSearchedFont = await Fonts.find({
      $text: { $search: req.params.search, $diacriticSensitive: true },
    });
    res.json(getSearchedFont);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getFontList,
  getFontById,
  getSearchFont,
  createFont,
  updateFont,
  deleteFont,
};
