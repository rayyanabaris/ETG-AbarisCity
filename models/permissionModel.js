const mongoose = require("mongoose");

const PermissionSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    role: String,
    role_name: String,
    admin_panel: Number,
    add_post: Number,
    manage_all_posts: Number,
    navigation: Number,
    pages: Number,
    rss_feeds: Number,
    categories: Number,
    widgets: Number,
    polls: Number,
    gallery: Number,
    comments_contact: Number,
    newsletter: Number,
    ad_spaces: Number,
    users: Number,
    seo_tools: Number,
    settings: Number
  },
  {
    timestamps: true,
  }
);

PermissionSchema.index({ title: "text" });

module.exports = mongoose.model("roles_permissions", PermissionSchema);
