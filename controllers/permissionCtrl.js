const Permissions = require("../models/permissionModel");
const asyncHandler = require("express-async-handler");

const getPermissionList = asyncHandler(async (req, res) => {
  try {
    const allPermission = await Permissions.find();
    res.json(allPermission);
  } catch (error) {
    throw new Error(error);
  }
});

const getPermissionById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaPermission = await Permissions.findById(id);
    res.json(getaPermission);
  } catch (error) {
    throw new Error(error);
  }
});

const createPermission = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const Permission = await Permissions.create(req.body);
    res.json(Permission);
  } catch (error) {
    throw new Error(error);
  }
});
const updatePermission = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedPermission = await Permissions.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedPermission);
  } catch (error) {
    throw new Error(error);
  }
});
const deletePermission = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedPermission = await Permissions.findByIdAndDelete(id);
    res.json(deletedPermission);
  } catch (error) {
    throw new Error(error);
  }
});

const getSearchPermission = asyncHandler(async (req, res) => {
  try {
    const getSearchedPermission = await Permissions.find({
      $text: { $search: req.params.search, $diacriticSensitive: true },
    });
    res.json(getSearchedPermission);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getPermissionList,
  getPermissionById,
  getSearchPermission,
  createPermission,
  updatePermission,
  deletePermission,
};
