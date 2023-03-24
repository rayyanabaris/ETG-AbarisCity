const Language = require("../models/languagesModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

const getLanguagesList = asyncHandler(async (req, res) => {
  try {
    const allLanguages = await Language.find();
    res.json(allLanguages);
  } catch (error) {
    throw new Error(error);
  }
});

const getLanguagesById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaLanguages = await Language.findById(id);
    res.json(getaLanguages);
  } catch (error) {
    throw new Error(error);
  }
});

const createLanguages = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const Languages = await Language.create(req.body);
    res.json(Languages);
  } catch (error) {
    throw new Error(error);
  }
});
const updateLanguages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedLanguages = await Language.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedLanguages);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteLanguages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedLanguages = await Language.findByIdAndDelete(id);
    res.json(deletedLanguages);
  } catch (error) {
    throw new Error(error);
  }
});

const getSearchLanguages = asyncHandler(async (req, res) => {
  try {
    const getSearchedLanguages = await Language.find({
      $text: { $search: req.params.search, $diacriticSensitive: true },
    });
    res.json(getSearchedLanguages);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getLanguagesList,
  getLanguagesById,
  getSearchLanguages,
  createLanguages,
  updateLanguages,
  deleteLanguages,
};
