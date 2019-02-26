const db = require("../utils/db");
const hash = require("../utils/hash");

/**
 * Creates a new user in the database if it still doesn't exist.
 */
module.exports = function(req, res, next) {
  const user = req.body;
  user.password = hash(user.password);

  db(function(dbo, db) {
    dbo
      .collection("users")
      .findOne({ email: user.email }, function(err, result) {
        if (err) {
          res.status(500).send(err);
        } else {
          if (result && result.email) {
            // user already exists
            res.status(400).send("The email address is already registered.");
            db.close();
          } else {
            // user not yet in db -> register
            dbo.collection("users").insertOne(user, function(err, result) {
              if (err) {
                res.status(500).send(err);
              } else {
                res.status(201).json(result);
              }
              db.close();
            });
          }
        }
      });
  });
};
