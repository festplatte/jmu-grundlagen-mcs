const _ = require("lodash");
const db = require("../db");
const hash = require("../utils/hash");

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
          if (_.has(result, "email")) {
            res.status(400).send("The email address is already registered.");
            db.close();
          } else {
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
