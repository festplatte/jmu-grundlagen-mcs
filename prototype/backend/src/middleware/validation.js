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

module.exports = {
  user: function(req, res, next) {
    const user = req.body;
    if (
      validateObject(user, [
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
      ])
    ) {
      next();
    } else {
      res.status(400).end();
    }
  }
};
