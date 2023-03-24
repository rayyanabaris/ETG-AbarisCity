const AdSpaces = require("../models/adspacesModel");
const asyncHandler = require("express-async-handler");

const getAdSpaceList = asyncHandler(async (req, res) => {
  try {
    const allAdSpace = await AdSpace.find();
    res.json(allAdSpace);
  } catch (error) {
    throw new Error(error);
  }
});

const getAdSpaceById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaAdSpace = await AdSpaces.findById(id);
    res.json(getaAdSpace);
  } catch (error) {
    throw new Error(error);
  }
});

const createAdSpace = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const AdSpace = await AdSpaces.create(req.body);
    res.json(AdSpace);
  } catch (error) {
    throw new Error(error);
  }
});
const updateAdSpace = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedAdSpace = await AdSpaces.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedAdSpace);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteAdSpace = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedAdSpace = await AdSpaces.findByIdAndDelete(id);
    res.json(deletedAdSpace);
  } catch (error) {
    throw new Error(error);
  }
});

const getSearchAdSpace = asyncHandler(async (req, res) => {
  try {
    const getSearchedAdSpace = await AdSpaces.find({
      $text: { $search: req.params.search, $diacriticSensitive: true },
    });
    res.json(getSearchedAdSpace);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getAdSpaceList,
  getAdSpaceById,
  getSearchAdSpace,
  createAdSpace,
  updateAdSpace,
  deleteAdSpace,
};
