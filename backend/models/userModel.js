const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must have a name'],
  },
  country: {
    type: String,
    required: [true, 'must have a country'],
  },
  phone: {
    type: Number,
    required: [true, 'must have a phone number'],
  },
})

const User = mongoose.model('User', userSchema)
module.exports = { User }
