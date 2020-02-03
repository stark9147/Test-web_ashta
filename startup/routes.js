const express = require("express");
const helmet = require("helmet");
const error = require("../middleware/error");
const process = require("../routes/process");

module.exports = function(app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(helmet());
  app.use("/api/process", process);
  app.use(error);
};
