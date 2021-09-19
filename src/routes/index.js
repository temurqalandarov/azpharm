const
  { Router } = require("express"),
  admin = require("./admin")

module.exports = Router({ mergeParams: true })

  .use("/admin", admin)
