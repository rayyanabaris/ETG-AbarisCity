const gallery = require("../models/galleryModel");
const GalleryCat = require("../models/gallerycatModel");
const GalleryAlbums = require("../models/galleryalbumModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");


const getGalleryList = asyncHandler(async (req, res) => {
  try {
    const allGallery = await gallery.find();
    res.json(allGallery);
  } catch (error) {
    throw new Error(error);
  }
});
const getGalleryById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaGallery = await gallery.findById(id);
    res.json(getaGallery);
  } catch (error) {
    throw new Error(error);
  }
});
const createGallery = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const Gallery = await gallery.create(req.body);
    res.json(Gallery);
  } catch (error) {
    throw new Error(error);
  }
});
const updateGallery = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const updatedGallery = await gallery.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedGallery);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteGallery = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const deletedGallery = await gallery.findByIdAndDelete(id);
    res.json(deletedGallery);
  } catch (error) {
    throw new Error(error);
  }
});
const getSearchGallery = asyncHandler(async (req, res) => {
  try {
    const getSearchedGallery = await gallery.find({
      $text: { $search: req.params.search, $diacriticSensitive: true },
    });
    res.json(getSearchedGallery);
  } catch (error) {
    throw new Error(error);
  }
});


const GetGalleryAlbumsList = asyncHandler(async (req, res) => {
  try {
    const GetGalleryAlbumsList = await GalleryAlbums.find();
    res.json(GetGalleryAlbumsList);
  } catch (error) {
    throw new Error(error);
  }
});
const GetGalleryAlbumById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const GetGalleryAlbumById = await GalleryAlbums.findById(id);
    res.json(GetGalleryAlbumById);
  } catch (error) {
    throw new Error(error);
  }
});
const CreateGalleryAlbum = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const CreateGalleryAlbum = await GalleryAlbums.create(req.body);
    res.json(CreateGalleryAlbum);
  } catch (error) {
    throw new Error(error);
  }
});
const UpdateGalleryAlbum = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const UpdateGalleryAlbum = await GalleryAlbums.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(UpdateGalleryAlbum);
  } catch (error) {
    throw new Error(error);
  }
});
const DeleteGalleryAlbum = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const DeleteGalleryAlbum = await GalleryAlbums.findByIdAndDelete(id);
    res.json(DeleteGalleryAlbum);
  } catch (error) {
    throw new Error(error);
  }
});
const GetSearchGalleryAlbum = asyncHandler(async (req, res) => {
  try {
    const GetSearchGalleryAlbum = await GalleryAlbums.find({
      $text: { $search: req.params.search, $diacriticSensitive: true },
    });
    res.json(GetSearchGalleryAlbum);
  } catch (error) {
    throw new Error(error);
  }
});


const GetGalleryCatList = asyncHandler(async (req, res) => {
  try {
    const allGalleryCategories = await GalleryCat.find();
    res.json(allGalleryCategories);
  } catch (error) {
    throw new Error(error);
  }
});
const GetGalleryCatListById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const GetaGalleryCategories = await GalleryCat.findById(id);
    res.json(GetaGalleryCategories);
  } catch (error) {
    throw new Error(error);
  }
});
const CreateGalleryCategories = asyncHandler(async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const GalleryCategories = await GalleryCat.create(req.body);
    res.json(GalleryCategories);
  } catch (error) {
    throw new Error(error);
  }
});
const UpdateGalleryCategories = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const UpdateGalleryCategories = await GalleryCat.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(UpdateGalleryCategories);
  } catch (error) {
    throw new Error(error);
  }
});
const DeleteGalleryCategories = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // validateMongoDbId(id);
  try {
    const DeleteGalleryCategories = await GalleryCat.findByIdAndDelete(id);
    res.json(DeleteGalleryCategories);
  } catch (error) {
    throw new Error(error);
  }
});
const GetSearchGalleryCategories = asyncHandler(async (req, res) => {
  try {
    const GetSearchGalleryCategories = await GalleryCat.find({
      $text: { $search: req.params.search, $diacriticSensitive: true },
    });
    res.json(GetSearchGalleryCategories);
  } catch (error) {
    throw new Error(error);
  }
});




module.exports = {
  getGalleryList,
  getGalleryById,
  getSearchGallery,
  createGallery,
  updateGallery,
  deleteGallery,

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
};
