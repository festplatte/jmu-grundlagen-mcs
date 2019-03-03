const _ = require("lodash");

/**
 * Validates if the obj contains every field listed in fields.
 * @param {any} obj
 * @param {Array} fields
 */
function validateObject(obj, fields) {
  for (let i = 0; i < fields.length; i++) {
    if (!_.has(obj, fields[i])) {
      return false;
    }
  }
  return true;
}

/**
 * Creates a function that validates the request body, if it contains the given fields
 * @param {Array} fields
 */
function createValidation(fields) {
  return (req, res, next) => {
    if (validateObject(req.body, fields)) {
      next();
    } else {
      res.status(400).end();
    }
  };
}

module.exports = {
  users: createValidation([
    "email",
    "password",
    "anrede",
    "prename",
    "name",
    "address",
    "plz",
    "city",
    "country",
    "phone"
  ]),
  auth: createValidation(["email", "password"]),
  orders: createValidation(["user", "user.email", "products"])
};
