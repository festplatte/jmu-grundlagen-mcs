const _ = require("lodash");
const db = require("../utils/db");
const jwt = require("../utils/jwt");
const hash = require("../utils/hash");

/**
 * Checks the credentials of the user against the db and generates a jwt as response.
 */
module.exports = function(req, res, next) {
  const user = req.body;
  user.password = hash(user.password);

  db(function(dbo, db) {
    dbo.collection("users").findOne(user, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        if (
          result &&
          result.email === user.email &&
          result.password === user.password
        ) {
          // auth success
          const token = jwt.createJwt({ user: result.email });
          res.status(200).send(token);
        } else {
          // auth failed
          res.status(401).end();
        }
      }
      db.close();
    });
  });
};
