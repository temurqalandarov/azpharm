const
  bot = require('../core/bot'),
  User = require('../models/user'),
  keyboard = require('../lib/keyboard')

bot.action(/uz|ru/, async ctx => {
  const user = await User.findOne({ user_id: ctx.chat.id })
  if (user.lang && user.lang !== ctx.callbackQuery.data)
    await User.updateOne({ user_id: ctx.chat.id }, { lang: ctx.callbackQuery.data })
  else if (!user.lang)
    await User.updateOne({ user_id: ctx.chat.id }, { $set: { lang: ctx.callbackQuery.data } })
  ctx.i18n.locale(ctx.callbackQuery.data)
  ctx.session.lang = ctx.callbackQuery.data
  ctx.editMessageText(ctx.i18n.t('lang'))
  return ctx.reply(ctx.i18n.t('menu'), keyboard(ctx))
})