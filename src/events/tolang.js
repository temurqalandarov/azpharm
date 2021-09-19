const
  bot = require('../core/bot'),
  { match } = require('telegraf-i18n'),
  button = require('../lib/button')

bot.hears(match('keyboard.lang'), ctx => {
  return ctx.reply('Qaysi tilni tanlaysiz\n\nВыберите язык', button)
})


