const validation = require("./middleware/validation");
const registerUser = require("./routes/registerUser");

var express = require("express");
var router = express.Router();

router.post("/register", validation.user, registerUser);

module.exports = router;
