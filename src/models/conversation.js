const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema({
  members: [String],
  type: {
    type: String,
    default: "private"
  }
}, { timestamps: true });

module.exports = mongoose.model("Conversation", ConversationSchema);