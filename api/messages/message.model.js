"use strict";
const mongoose = require("mongoose");

const { Schema } = mongoose;

const messageSchema = new Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
});

const messageModel = mongoose.model("Messages", messageSchema);

module.exports = messageModel;
