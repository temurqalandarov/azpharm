const
  { Scenes: { BaseScene } } = require('telegraf')

module.exports = new BaseScene('apply')
  .on('text', ctx => {
    ctx.reply(`2/3\n${ctx.message.text} ${ctx.i18n.t('app.contact')}`, {
      reply_markup: {
        keyboard: [[{ text: ctx.i18n.t('app.contactLabel'), request_contact: true }]],
        one_time_keyboard: true, resize_keyboard: true
      }
    })
    ctx.session.name = ctx.message.text
    return ctx.scene.enter('apply1')
  })
