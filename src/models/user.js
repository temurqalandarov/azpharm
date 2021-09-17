const
  { Schema, model } = require('mongoose')

module.exports = model('Users', new Schema({
  user_id: {
    type: String,
    required: true
  },
  lang: {
    type: String,
    enum: ['uz', 'ru']
  }
}, {
  versionKey: false,
  timestamps: true
}))