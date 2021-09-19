const
  { Scenes: { BaseScene } } = require('telegraf'),
  { GROUP_ID } = require('../core/config'),
  keyboard = require('../lib/keyboard')

module.exports = new BaseScene('feedback')
  .on('text', ctx => {
    ctx.forwardMessage(GROUP_ID)
    ctx.reply(ctx.i18n.t('pending'), keyboard(ctx))
    return ctx.scene.leave()
  })