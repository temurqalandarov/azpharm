const
  User = require('../models/user')

module.exports = async (ctx, next) => {
  if (!ctx.session.lang) {
    const user = await User.findOne({ user_id: ctx.chat.id })
    if (user?.lang)
      ctx.session.lang = user.lang
  }
  ctx.i18n.locale(ctx.session.lang)
  next()
}