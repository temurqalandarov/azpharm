const
  { Telegraf, session, Scenes: { Stage } } = require('telegraf'),
  I18n = require('telegraf-i18n'),
  { TOKEN } = require('./config'),
  bot = new Telegraf(TOKEN),
  scene = require('../scenes/apply'),
  stage = new Stage([scene])

const i18n = new I18n({
  directory: __dirname + '/locales',
  sessionName: 'session',
  useSession: true
})

bot
  .use(session())
  .use(i18n.middleware())
  .use(stage.middleware())


module.exports = bot