const mongoose = require("mongoose");

const FontSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    font_name: String,
    font_url: String,
    font_family: String,
    is_default: Number,
  },
  {
    timestamps: true,
  }
);

FontSchema.index({ title: "text" });

module.exports = mongoose.model("fonts", FontSchema);
