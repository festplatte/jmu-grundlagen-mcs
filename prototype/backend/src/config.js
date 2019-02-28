module.exports = {
  db: {
    url: `mongodb://${process.env.MONGODB_HOST || "localhost"}:27017/`,
    db: "alternate",
    options: {
      authSource: "admin",
      auth: { user: "administrator", password: "administrator" },
      useNewUrlParser: true
    }
  },
  auth: {
    jwtSecret: "dfg/8fdg9skad"
  }
};
