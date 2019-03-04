const db = require("../utils/db");
const hash = require("../utils/hash");

/**
 * Creates a new user in the database if it still doesn't exist.
 */
module.exports = {
  placeOrder: (req, res, next) => {
    const order = req.body;
    order.date = new Date();

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
  },

  getOrders: (req, res, next) => {
    const email = req.user;
    const query = {};

    db(function(dbo, db) {
      dbo
        .collection("orders")
        .find(query)
        .toArray(function(err, result) {
          if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).json(result.filter(x => x.user.email === email));
          }
          db.close();
        });
    });
  }
};
