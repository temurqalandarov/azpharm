const
  { Scenes: { BaseScene } } = require('telegraf')

module.exports = new BaseScene('apply1')
  .on('text', ctx => {
    ctx.reply(`3/3\n${ctx.i18n.t('app.location')}`, {
      reply_markup: {
        keyboard: [[{ text: ctx.i18n.t('app.locationLabel'), request_location: true }]],
        one_time_keyboard: true, resize_keyboard: true
      }
    })
    ctx.session.contact = ctx.message.text
    return ctx.scene.enter('apply2')
  })
  .on('contact', ctx => {
    ctx.reply(`3/3\n${ctx.i18n.t('app.location')}`, {
      reply_markup: {
        keyboard: [[{ text: ctx.i18n.t('app.locationLabel'), request_location: true }]],
        one_time_keyboard: true, resize_keyboard: true
      }
    })
    ctx.session.contact = ctx.message.contact.phone_number
    return ctx.scene.enter('apply2')
  })