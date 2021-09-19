require('dotenv').config()

module.exports = {
  TOKEN: process.env.TOKEN,
  PORT: process.env.PORT,
  URL: process.env.URL,
  ENVIRONMENT: process.env.ENVIRONMENT,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  GROUP_ID: process.env.GROUP_ID,
  BOT_ID: process.env.BOT_ID
}