const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
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

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
