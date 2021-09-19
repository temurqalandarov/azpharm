const
  { Telegraf, session, Scenes: { Stage } } = require('telegraf'),
  I18n = require('telegraf-i18n'),
  { TOKEN, GROUP_ID } = require('./config'),
  bot = new Telegraf(TOKEN),
  scenes = require('../scenes'),
  stage = new Stage(scenes),
  lang = require('../middlewares/lang'),
  run = require('./server')

bot.catch(err => {
  const message = err.stack || err
  console.log(message, err)
  bot.telegram.sendMessage(GROUP_ID, message)
  throw new Error('Error: ' + message)
})

const i18n = new I18n({
  defaultLanguage: 'uz',
  directory: __dirname + '/locales',
  sessionName: 'session',
  useSession: true
})

bot
  .use(session())
  .use(i18n.middleware())
  .use(stage.middleware())
  .use(lang)

run(bot)

module.exports = bot


