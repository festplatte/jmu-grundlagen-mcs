const jwtSimple = require("jwt-simple");
const config = require("../config").auth;

module.exports = {
  createJwt: payload => jwtSimple.encode(payload, config.jwtSecret),
  decodeJwt: jwt => jwtSimple.decode(jwt, config.jwtSecret)
};
