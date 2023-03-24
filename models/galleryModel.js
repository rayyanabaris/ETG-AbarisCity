const mongoose = require("mongoose");

const GallerySchema = mongoose.Schema(
{
   user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  lang_id: Number,
  title: String,
  album_id: Number,
  category_id: Number,
  path_big: String,
  path_small: String,
  is_album_cover: Number,
},
  {
    timestamps: true,
  }
);

GallerySchema.index({ title: "text" });

module.exports = mongoose.model("Gallery", GallerySchema);
