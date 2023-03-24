const router = require("express").Router();

const {
  getGalleryList,
  createGallery,
  updateGallery,
  deleteGallery,
  getGalleryById,
  getSearchGallery,

  GetGalleryAlbumsList,
  GetGalleryAlbumById,
  CreateGalleryAlbum,
  UpdateGalleryAlbum,
  DeleteGalleryAlbum,
  GetSearchGalleryAlbum,

  GetGalleryCatList,
  GetGalleryCatListById,
  CreateGalleryCategories,
  UpdateGalleryCategories,
  DeleteGalleryCategories,
  GetSearchGalleryCategories,
} = require("../controllers/galleryCtrl");

router.get("/", getGalleryList);
router.post("/add", createGallery);
router.put("/update/:id", updateGallery);
router.delete("/delete/:id", deleteGallery);
router.get("/id/:id", getGalleryById);
router.get("/search/:search", getSearchGallery);

router.get("/album", GetGalleryAlbumsList);
router.post("/album/add", CreateGalleryAlbum);
router.put("/album/update/:id", UpdateGalleryAlbum);
router.delete("/album/delete/:id", DeleteGalleryAlbum);
router.get("/album/:id", GetGalleryAlbumById);
router.get("/search/:search", GetSearchGalleryAlbum);

router.get("/category", GetGalleryCatList);
router.post("/category/add", CreateGalleryCategories);
router.put("/category/update/:id", UpdateGalleryCategories);
router.delete("/category/delete/:id", DeleteGalleryCategories);
router.get("/category/:id", GetGalleryCatListById);
router.get("/search/:search", GetSearchGalleryCategories);

module.exports = router;
