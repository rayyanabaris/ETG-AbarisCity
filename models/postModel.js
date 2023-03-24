const mongoose = require("mongoose");

const postsSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    lang_id: Number,
    title: String,
    title_slug: String,
    title_hash: String,
    keywords: Number,
    summary: String,
    content: String,
    category_id: Number,
    image_big: String,
    image_default: String,
    image_slider: String,
    image_mid: String,
    image_small: String,
    image_mime: String,
    optional_url: String, 
    pageviews: Number,
    need_auth: Number,
    is_slider: Number,
    slider_order: Number,
    is_featured: Number,
    featured_order: Number,
    is_recommended: Number,
    is_breaking: Number,
    is_scheduled: Number,
    visibility: Number,
    show_right_column: Number,
    post_type: String,
    video_path: String,
    image_url: String,
    video_url: String,
    video_embed_code: Number,
    status: Number,
    feed_id: Number,
    post_url: Number,
    show_post_url: Number,
    image_description: String,
    show_item_numbers: Number,
  },
  {
    timestamps: true,
  }
);

postsSchema.index({ title: "text" });

module.exports = mongoose.model("posts", postsSchema);
