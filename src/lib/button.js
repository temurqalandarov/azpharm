const { Markup } = require('telegraf')

module.exports = Markup.inlineKeyboard([
  Markup.button.callback('🇺🇿UZ', 'uz'),
  Markup.button.callback('🇷🇺RU', 'ru')
]).oneTime().resize()