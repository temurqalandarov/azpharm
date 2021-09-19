const
  { Markup } = require('telegraf'),
  bot = require('../core/bot'),
  { match } = require('telegraf-i18n')

bot.hears(match('keyboard.apply'), ctx => {
  ctx.reply(ctx.i18n.t('app.name'), Markup.removeKeyboard())
  return ctx.scene.enter('apply')
})

