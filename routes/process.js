const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const faker = require("faker");
const express = require("express");
const Joi = require("joi");
const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = validateProcess(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const company = generateCompany();
  res.send(company);
});

router.post("/admin", [auth, admin], async (req, res) => {
  const { error } = validateProcess(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const company = generateCompany();
  res.send(company);
});

function generateCompany() {
  const companyName = faker.company.companyName();
  const compSuffix = faker.company.companySuffix();
  const company = `${companyName} ${compSuffix}`;
  return company;
}

function validateProcess(process) {
  const schema = {
    value: Joi.number()
      .min(0)
      .max(9)
      .required()
  };

  return Joi.validate(process, schema);
}

module.exports = router;
