const
  { Markup } = require('telegraf'),
  bot = require('../core/bot'),
  { match } = require('telegraf-i18n')

bot.hears(match('keyboard.feedback'), ctx => {
  ctx.reply(ctx.i18n.t('feedback'), Markup.removeKeyboard())
  return ctx.scene.enter('feedback')
})