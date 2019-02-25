function validateObject(obj, fields) {
  for (let i; i < fields.length; i++) {
    if (
      obj[fields[i]] === undefined ||
      obj[fields[i]] === null ||
      obj[fields[i]] === ""
    ) {
      return false;
    }
  }
  return true;
}

module.exports = {
  user: function(req, res, next) {
    const user = req.body;
    if (
      validateObject(user, [
        "email",
        "password",
        "anrede",
        "prename",
        "name",
        "address",
        "plz",
        "city",
        "country",
        "phone"
      ])
    ) {
      next();
    } else {
      res.end(400);
    }
  }
};
