const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  syncId: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required:true
  },
  userId: {
    type: String,
    required:true
  },
  hashValue: {
    type: Number,
    required: true
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;