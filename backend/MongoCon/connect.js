const mongoose = require('mongoose')

module.exports.connectApp = (url) => {
  return mongoose.connect(url)
}
