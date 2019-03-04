const validation = require("./middleware/validation");
const verifyJwt = require("./middleware/verifyJwt");
const users = require("./routes/users");
const authenticate = require("./routes/authenticate");
const orders = require("./routes/orders");

var express = require("express");
var router = express.Router();

router.post("/users", validation.users, users.registerUser);
router.post("/auth", validation.auth, authenticate);
router.post("/orders", validation.orders, orders.placeOrder);
router.get("/orders", verifyJwt, orders.getOrders);

// just for test purpose
router.get("/dummy", verifyJwt, function(req, res) {
  res.send(`Hello ${req.user}`);
});

module.exports = router;
