const
  { Markup } = require('telegraf'),
  bot = require('../core/bot'),
  User = require('../models/user')

bot.action(/uz|ru/, async ctx => {
  const user = await User.findOne({ user_id: ctx.chat.id })
  if (user.lang)
    await User.updateOne({ user_id: ctx.chat.id }, { lang: ctx.callbackQuery.data })
  await User.updateOne({ user_id: ctx.chat.id }, { $set: { lang: ctx.callbackQuery.data } })
  ctx.i18n.locale(ctx.callbackQuery.data)
  ctx.editMessageText(ctx.i18n.t('lang'))
  return ctx.reply('Bosh menyu', Markup.keyboard([
    [ctx.i18n.t('keyboard')]
  ]).oneTime().resize())
})