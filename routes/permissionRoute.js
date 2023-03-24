const router = require("express").Router();

const {
  getPermissionList,
  createPermission,
  updatePermission,
  deletePermission,
  getPermissionById,
  getSearchPermission,
} = require("../controllers/permissionCtrl");

router.get("/", getPermissionList);
router.post("/add", createPermission);
router.put("/update/:id", updatePermission);
router.delete("/delete/:id", deletePermission);
router.get("/:id", getPermissionById);
router.get("/search/:search", getSearchPermission);

module.exports = router;
