const mongoose = require("mongoose");

const WidgetsSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    lang_id: Number,
    title: String,
    content: String,
    type: String,
    widget_order: Number,
    visibility: Number,
    is_custom: Number,
  },
  {
    timestamps: true,
  }
);

WidgetsSchema.index({ title: "text" });

module.exports = mongoose.model("Widgets", WidgetsSchema);
