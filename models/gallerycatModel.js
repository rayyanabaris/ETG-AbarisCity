const mongoose = require("mongoose");

const gallery_categoriesSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    lang_id: Number,
    name: String,
    album_id: { type: mongoose.Schema.Types.ObjectId, ref: "album" },
  },
  {
    timestamps: true,
  }
);

gallery_categoriesSchema.index({ title: "text" });

module.exports = mongoose.model("gallery_categories", gallery_categoriesSchema);
