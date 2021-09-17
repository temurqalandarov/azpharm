const
  { Schema, model } = require('mongoose')

module.exports = model('Applications', new Schema({
  name: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
}, {
  versionKey: false,
  timestamps: true
}))