const mongoose = require("mongoose");

const SubscriberSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    email: String,
    token: String,
  },
  {
    timestamps: true,
  }
);

SubscriberSchema.index({ title: "text" });

module.exports = mongoose.model("Subscriber", SubscriberSchema);
