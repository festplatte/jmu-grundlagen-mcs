const MongoClient = require("mongodb").MongoClient;
const config = require("./config").db;

/**
 * Creates a db connection and executes the callback function, if there's no error. Afterwards the db connection is closed.
 */
module.exports = function(cb) {
  MongoClient.connect(config.url, config.options, function(err, db) {
    if (err) throw err;
    const dbo = db.db(config.db);
    cb(dbo, db);
  });
};
