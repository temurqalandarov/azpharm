const
  { Scenes: { BaseScene }, Markup } = require('telegraf'),
  User = require('../models/application'),
  post = require('../lib/post')

module.exports = new BaseScene('apply')
  .on('text', ctx => {
    ctx.reply(`2/3\n${ctx.message.text} kontaktingizni jo'nating yoki telefon raqamingizni yozib yuboring`, { reply_markup: { keyboard: [[{ text: '📲 Kontaktni yuborish', request_contact: true }]] } })
    ctx.session.name = ctx.message.text
  })
  .on('contact', ctx => {
    ctx.reply(`3/3\nEndi lokatsiyani yuboring`, { reply_markup: { keyboard: [[{ text: '📲 Lokatsiyani yuborish', request_location: true }]] } })
    ctx.session.contact = ctx.message.contact.phone_number
  })
  .on('location', async ctx => {
    ctx.reply(`Murojaatingiz qabul qilindi, tez orada bog'lanamiz AZ pharmni tanlaganizdan xursandmiz`)
    const { name, contact } = ctx.session
    const location = `https://www.google.com/maps/search/?api=1&query=${ctx.message.location.latitude},${ctx.message.location.longitude}`
    await User.create({
      name,
      contact,
      location
    })
    ctx.telegram.sendMessage(-1001594335387, post(name, contact, location))
    return ctx.scene.leave()
  })