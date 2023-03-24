const mongoose = require("mongoose");

const CommentsSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    parent_id: Number,
    post_id: Number,
    email: String,
    name: String,
    comment: String,
    ip_address: String,
    like_count: Number,
    status: Number,
  },
  {
    timestamps: true,
  }
);

CommentsSchema.index({ title: "text" });

module.exports = mongoose.model("Comments", CommentsSchema);
