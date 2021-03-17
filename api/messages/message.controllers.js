"use strict";

const messageModel = require("./message.model");
// const Joi = require("joi");
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
    console.log(req.body);
    const messageCreate = await messageModel.create(req.body);
    return res.status(201).json(messageCreate);
  } catch (error) {
    next(error);
  }
}

// function validateId(req, res, next) {
//   const { contactId } = req.params;

//   if (!ObjectId.isValid(contactId)) {
//     return res.status(400).send();
//   }
//   next();
// }

// function validateContact(req, res, next) {
//   const validationRules = Joi.object({
//     name: Joi.string().required(),
//     email: Joi.string().required(),
//     phone: Joi.string().required(),
//     subscription: Joi.string().required(),
//     password: Joi.string().required(),
//   });
//   const val = validationRules.validate(req.body);
//   if (val.error) {
//     return res.status(400).send(val.error.details[0].message);
//   }
//   next();
// }
// function validateUpdateContact(req, res, next) {
//   const validationRules = Joi.object({
//     name: Joi.string(),
//     email: Joi.string(),
//     phone: Joi.string(),
//     subscription: Joi.string(),
//     password: Joi.string(),
//   });
//   const val = validationRules.validate(req.body);
//   if (val.error) {
//     return res.status(400).send(val.error.details[0].message);
//   }
//   next();
// }

module.exports = {
  listMessages,
  addMessage,

  //   validateId,
  //   validateContact,
  //   validateUpdateContact,
};
