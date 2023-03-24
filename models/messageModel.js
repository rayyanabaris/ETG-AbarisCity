const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: String,
    email: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

MessageSchema.index({ title: "text" });

module.exports = mongoose.model("Contact", MessageSchema);
