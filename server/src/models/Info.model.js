const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema({
  description: {
    type: String,
    maxLength: [500, "description can not be longer than 500 characters"],
  },
  url: {
    type: String,
    required: [true, "Please enter a url for image"],
  },
  likes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Info", InfoSchema);
