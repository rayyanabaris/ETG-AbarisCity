const mongoose = require("mongoose");

const LanguagesSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: String,
    short_form: String,
    language_code: String,
    folder_name: String,
    text_direction: String,
    status: Number,
    language_order: Number
  },
  {
    timestamps: true,
  }
);

LanguagesSchema.index({ title: "text" });

module.exports = mongoose.model("languages", LanguagesSchema);
