const Widget = require("../models/widgetsModel");
const asyncHandler = require("express-async-handler");

const getWidgetsList = asyncHandler(async (req, res) => {
  try {
    const allWidgets = await Widget.find();
    res.json(allWidgets);
  } catch (error) {
    throw new Error(error);
  }
});

const getWidgetsById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaWidgets = await Widget.findById(id);
    res.json(getaWidgets);
  } catch (error) {
    throw new Error(error);
  }
});

const createWidgets = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const Widgets = await Widget.create(req.body);
    res.json(Widgets);
  } catch (error) {
    throw new Error(error);
  }
});
const updateWidgets = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedWidgets = await Widget.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedWidgets);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteWidgets = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedWidgets = await Widget.findByIdAndDelete(id);
    res.json(deletedWidgets);
  } catch (error) {
    throw new Error(error);
  }
});

const getSearchWidgets = asyncHandler(async (req, res) => {
  try {
    const getSearchedWidgets = await Widget.find({
      $text: { $search: req.params.search, $diacriticSensitive: true },
    });
    res.json(getSearchedWidgets);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getWidgetsList,
  getWidgetsById,
  getSearchWidgets,
  createWidgets,
  updateWidgets,
  deleteWidgets,
};
