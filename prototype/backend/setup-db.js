/**
 * Creates the initial db setup with the required databases and collections.
 */

const MongoClient = require("mongodb").MongoClient;
const options = {
  authSource: "admin",
  auth: { user: "administrator", password: "administrator" },
  useNewUrlParser: true
};
let url = "mongodb://localhost:27017/alternate";

MongoClient.connect(url, options, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

url = "mongodb://localhost:27017/";
MongoClient.connect(url, options, function(err, db) {
  if (err) throw err;
  var dbo = db.db("alternate");
  dbo.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    dbo.createCollection("orders", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });
});
