const _ = require("lodash");
const jwt = require("../utils/jwt");

const TOKEN_PREFIX = "Bearer ";

/**
 * Middleware for checking the authorization header and verifying the jwt. The user contained in the jwt will be added to the request as request.user
 */
module.exports = function(req, res, next) {
  let authorized = false;
  const authHeader = req.get("Authorization");
  if (authHeader && authHeader.startsWith(TOKEN_PREFIX)) {
    const token = authHeader.replace(TOKEN_PREFIX, "");
    const auth = jwt.decodeJwt(token);
    if (auth && _.has(auth, "user")) {
      authorized = true;
      req.user = auth.user;
      next();
    }
  }

  if (!authorized) {
    res.status(401).end();
  }
};
