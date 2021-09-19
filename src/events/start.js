const
  bot = require('../core/bot'),
  User = require('../models/user'),
  button = require('../lib/button'),
  keyboard = require('../lib/keyboard')

bot.start(async ctx => {
  const user = await User.findOne({ user_id: ctx.chat.id })
  if (!user?.lang) {
    if (!user)
      await User.create({ user_id: ctx.chat.id })
    return ctx.reply('Qaysi tilni tanlaysiz\n\nВыберите язык', button)
  }
  return ctx.reply(ctx.i18n.t('menu'), keyboard(ctx))
})