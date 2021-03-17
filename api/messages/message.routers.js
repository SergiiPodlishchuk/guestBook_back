"use strict";

const { Router } = require("express");
const messageControllers = require("./message.controllers");
const messagesRouter = Router();

messagesRouter.get("/", messageControllers.listMessages);

messagesRouter.post(
  "/",
  messageControllers.validateMessage,
  messageControllers.addMessage
);

module.exports = messagesRouter;
