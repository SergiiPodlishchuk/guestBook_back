"use strict";

const messageModel = require("./message.model");
const Joi = require("joi");
const {
  Types: { ObjectId },
} = require("mongoose");

async function listMessages(req, res, next) {
  try {
    const listMessages = await messageModel.find();
    return res.status(200).json(listMessages);
  } catch (error) {
    next(error);
  }
}

async function addMessage(req, res, next) {
  try {
    // console.log(req.body);
    const messageCreate = await messageModel.create(req.body);
    return res.status(201).json(messageCreate);
  } catch (error) {
    next(error);
  }
}

function validateMessage(req, res, next) {
  const validationRules = Joi.object({
    name: Joi.string().required(),
    message: Joi.string().required(),
  });
  const val = validationRules.validate(req.body);
  if (val.error) {
    return res.status(400).send(val.error.details[0].message);
  }
  next();
}

module.exports = {
  listMessages,
  addMessage,
  validateMessage,
};
