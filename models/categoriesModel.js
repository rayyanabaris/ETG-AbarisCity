const mongoose = require("mongoose");

const categoriesSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    lang_id: Number,
    name: String,
    name_slug: String,
    parent_id: Number,
    description: String,
    keywords: Number,
    color: String,
    block_type: String,
    category_order: Number,
    show_at_homepage: Number,
    show_on_menu: Number,

  },
  {
    timestamps: true,
  }
);

categoriesSchema.index({ title: "text" });

module.exports = mongoose.model("categories", categoriesSchema);
