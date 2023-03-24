const Category = require("../models/categoriesModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

const getCategoriesList = asyncHandler(async (req, res) => {
  try {
    const allCategories = await Categories.find();
    res.json(allCategories);
  } catch (error) {
    throw new Error(error);
  }
});

const getCategoriesById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaCategories = await Category.findById(id);
    res.json(getaCategories);
  } catch (error) {
    throw new Error(error);
  }
});

const createCategories = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const Categories = await Category.create(req.body);
    res.json(Categories);
  } catch (error) {
    throw new Error(error);
  }
});
const updateCategories = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedCategories = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCategories);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteCategories = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedCategories = await Category.findByIdAndDelete(id);
    res.json(deletedCategories);
  } catch (error) {
    throw new Error(error);
  }
});

const getSearchCategories = asyncHandler(async (req, res) => {
  try {
    const getSearchedCategories = await Category.find({
      $text: { $search: req.params.search, $diacriticSensitive: true },
    });
    res.json(getSearchedCategories);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getCategoriesList,
  getCategoriesById,
  getSearchCategories,
  createCategories,
  updateCategories,
  deleteCategories,
};
