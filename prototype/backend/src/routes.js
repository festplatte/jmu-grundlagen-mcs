const registerUser = require("./routes/registerUser");

var express = require("express");
var router = express.Router();

// TODO add validation middleware
router.post("/register", registerUser);

module.exports = router;
