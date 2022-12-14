const mongoose = require("mongoose");

const shirtSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/,
  },
  size: {
    type: String,
    required: true,
    enum: ["small", "medium", "large", "x-large"],
  },
  design: {
    type: String,
    required: true,
    enum: ["custom", "logo1", "logo2"],
    validate: /^[A-Za-z0-9 ]*$/,
  },
});

const Top = mongoose.model("Top", shirtSchema);

module.exports = Top;
