module.exports = {
  db: {
    url: "mongodb://localhost:27017/",
    db: "alternate",
    options: {
      authSource: "admin",
      auth: { user: "administrator", password: "administrator" },
      useNewUrlParser: true
    }
  }
};