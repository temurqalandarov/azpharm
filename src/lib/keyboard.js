const { Markup } = require('telegraf')

module.exports = ctx => {
  return Markup.keyboard([
    [ctx.i18n.t('keyboard.apply')],
    [ctx.i18n.t('keyboard.feedback'), ctx.i18n.t('keyboard.lang')]
  ]).oneTime().resize()
}