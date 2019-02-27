const validation = require("./middleware/validation");
const verifyJwt = require("./middleware/verifyJwt");
const registerUser = require("./routes/registerUser");
const authenticate = require("./routes/authenticate");

var express = require("express");
var router = express.Router();

router.post("/users", validation.users, registerUser);
router.post("/auth", validation.auth, authenticate);

// just for test purpose
router.get("/dummy", verifyJwt, function(req, res) {
  res.send(`Hello ${req.user}`);
});

module.exports = router;
