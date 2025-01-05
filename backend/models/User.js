const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  status: { type: String, default: "Hey there! I am using WhatsApp." },
  profilePic: { type: String, default: "default.png" },
});

module.exports = mongoose.model("User", userSchema);
