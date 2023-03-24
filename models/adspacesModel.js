const mongoose = require("mongoose");

const AdSpaceSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    ad_space: String,
    ad_code_728: String,
    ad_code_468: String,
    ad_code_300: String,
    ad_code_234: String
  },
  {
    timestamps: true,
  }
);

AdSpaceSchema.index({ title: "text" });

module.exports = mongoose.model("ad_spaces", AdSpaceSchema);
