const registerUser = require("./routes/registerUser");

var express = require("express");
var router = express.Router();

router.post("/register", registerUser);

module.exports = router;
