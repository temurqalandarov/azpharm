const
  bot = require('../core/bot'),
  User = require('../models/user'),
  { GROUP_ID } = require('../core/config')

bot.on('message', async ctx => {
  if (ctx.message?.forward_from_chat?.type === 'channel') {
    let send = 0
    const users = await User.find()
    for (let i = 0; i < users.length; i++) {
      send++
      ctx.copyMessage(users[i].user_id)
      await new Promise(resolve => {
        setTimeout(resolve, 100)
      })
    }
    return ctx.telegram.sendMessage(GROUP_ID, send + ' ta foydalanuvchiga reklama yuborildi')
  }
})

