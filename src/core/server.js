const
  express = require('express'),
  app = express(),
  routes = require('../routes'),
  expressLayouts = require('express-ejs-layouts'),
  { TOKEN, ENVIRONMENT, URL, PORT } = require('./config'),
  // { get } = require('https'),
  { dirname, join } = require('path')

app
  .set('views', join(dirname(__dirname), 'views'))
  .set('view engine', 'ejs')
  .use(expressLayouts)
  .use(routes)

module.exports = async (bot) => {
  await require('./db')()
  if (ENVIRONMENT === 'prod') {
    // bot.telegram.setWebhook(URL + '/bot' + TOKEN)
    // app.use(bot.webhookCallback('/bot' + TOKEN))
    bot.launch().then(() => console.log('App working...')).catch(e => console.log(e))
    // setInterval(() => {
    //   get(URL)
    // }, 1500000)
  }
  else if (ENVIRONMENT === 'dev')
    bot.launch().then(() => console.log('App working...')).catch(e => console.log(e))
  app.listen(PORT, () => console.log(`App listening at ${PORT}...`))
}





