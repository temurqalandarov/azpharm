const
  { Scenes: { BaseScene } } = require('telegraf'),
  User = require('../models/application'),
  post = require('../lib/post'),
  { GROUP_ID } = require('../core/config'),
  keyboard = require('../lib/keyboard')

module.exports = new BaseScene('apply2')
  .on('location', async ctx => {
    const { name, contact } = ctx.session
    const location = `https://www.google.com/maps/search/?api=1&query=${ctx.message.location.latitude},${ctx.message.location.longitude}`
    await User.create({
      name,
      contact,
      location
    })
    ctx.telegram.sendMessage(GROUP_ID, post(name, contact, location), { parse_mode: 'HTML' })
    ctx.reply(ctx.i18n.t('app.apply'), keyboard(ctx))
    console.log('hello')
    return ctx.scene.leave()
  })
  .on('text', ctx => {
    ctx.reply(`3/3\n${ctx.i18n.t('app.location')}`, {
      reply_markup: {
        keyboard: [[{ text: ctx.i18n.t('app.locationLabel'), request_location: true }]],
        one_time_keyboard: true, resize_keyboard: true
      }
    })
  })