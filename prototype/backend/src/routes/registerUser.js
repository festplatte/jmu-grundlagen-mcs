const db = require("../db");

module.exports = function(req, res, next) {
  const user = req.body;

  // TODO validate, hash password

  db(function(dbo, db) {
    dbo.collection("users").insertOne(user, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
  res.status(201).json(user);
};
