const
  { Markup } = require('telegraf'),
  bot = require('../core/bot'),
  User = require('../models/user')

bot.start(async ctx => {
  const user = await User.findOne({ user_id: ctx.chat.id })
  if (!user)
    await User.create({ user_id: ctx.chat.id })
  return ctx.reply('Qaysi tilni tanlaysiz\n\nВыберите язык', Markup.inlineKeyboard([
    Markup.button.callback('🇺🇿UZ', 'uz'),
    Markup.button.callback('🇷🇺RU', 'ru')
  ]))
})