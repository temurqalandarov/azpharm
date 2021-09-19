const
  { Router } = require("express"),
  router = Router({ mergeParams: true }),
  Application = require('../models/application')

router.route("/dashboard").get(async (req, res) => {
  const application = await Application.find().sort({ createdAt: -1 })
  // .limit(20)
  // .skip(0)
  res.render('dashboard', {
    title: "Dashboard",
    application
  })
})
// router.route('/login').post()

module.exports = router
