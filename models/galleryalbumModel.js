const mongoose = require("mongoose");

const gallery_albumsSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    lang_id: Number,
    name: String,
  },
  {
    timestamps: true,
  }
);

gallery_albumsSchema.index({ title: "text" });

module.exports = mongoose.model("gallery_albums", gallery_albumsSchema);
