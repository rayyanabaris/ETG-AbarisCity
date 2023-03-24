const mongoose = require("mongoose");

const rss_feedSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    lang_id: Number,
    feed_name: String,
    feed_url: String,
    post_limit: Number,
    category_id: Number,
    image_saving_method: String,
    auto_update: Number,
    read_more_button: Number,
    read_more_button_text: String,
    add_posts_as_draft: Number
  },
  {
    timestamps: true,
  }
);

rss_feedSchema.index({ title: "text" });

module.exports = mongoose.model("rss_feed", rss_feedSchema);
