const
  { Markup } = require('telegraf'),
  bot = require('../core/bot'),
  User = require('../models/user')

bot.command('lang', ctx => {
  return ctx.reply('Qaysi tilni tanlaysiz\n\nВыберите язык', Markup.inlineKeyboard([
    Markup.button.callback('🇺🇿UZ', 'uz'),
    Markup.button.callback('🇷🇺RU', 'ru')
  ]))
})

