const
  { TOKEN, ENVIRONMENT, URL, PORT } = require('./core/config'),
  bot = require('./core/bot'),
  { get } = require('https'),
  app = require('express')()

// bot.catch((err) => {
//   const message = err.stack || err
//   console.log(message, err)
//   bot.telegram.sendMessage(CHANNEL_ID, message)
// })
app.get('/admin', (req, res) => {
  res.send('Hello world')
})
  ; (async () => {
    require('./events')
    await require('./core/db')()
    if (ENVIRONMENT === 'prod') {
      bot.telegram.setWebhook(URL + '/bot' + TOKEN)
      app.use(bot.webhookCallback('/bot' + TOKEN))

      setInterval(() => {
        get(URL)
      }, 1500000)

      app.listen(PORT, () => console.log(`App listening at ${PORT}...`))
    }
    else if (ENVIRONMENT === 'dev')
      bot.launch().then(() => console.log('App working...')).catch(e => console.log(e))
  })()