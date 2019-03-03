const db = require("../utils/db");
const hash = require("../utils/hash");

/**
 * Creates a new user in the database if it still doesn't exist.
 */
module.exports = {
  placeOrder: (req, res, next) => {
    const order = req.body;

    db(function(dbo, db) {
      dbo.collection("orders").insertOne(order, function(err, result) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(201).json(result);
        }
        db.close();
      });
    });
  }
};
