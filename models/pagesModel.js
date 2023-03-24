const mongoose = require("mongoose");

const pagesSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    lang_id: Number,
    title: String,
    slug: String,
    description: String,
    keywords: String,
    is_custom: Number,
    page_default_name: String,
    page_content: String,
    page_order: Number,
    visibility: Number,
    title_active: Number,
    breadcrumb_active: Number,
    right_column_active: Number,
    need_auth: Number,
    location: String,
    link: String ,
    parent_id: Number,
    page_type: String,
  },
  {
    timestamps: true,
  }
);

pagesSchema.index({ title: "text" });

module.exports = mongoose.model("Page", pagesSchema);
