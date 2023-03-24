const mongoose = require("mongoose");

const pollsSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    lang_id: Number,
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    option5: String,
    option6: String,
    option7: String,
    option8: String,
    option9: String,
    option10: String,
    Status: Number,
    vote_permission: String,
  },
  {
    timestamps: true,
  }
);

pollsSchema.index({ title: "text" });

module.exports = mongoose.model("polls", pollsSchema);
